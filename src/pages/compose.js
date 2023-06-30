import { useState } from "react";
import fetch from 'cross-fetch';
import { useNavigate } from "react-router-dom";


function ArticleCompose(){
    const [article, setArticle] = useState({
        "title":"",
        "content":"",
        "imgUrl":""
    });
    let navigate = useNavigate(); 

    function articleChange(event){
        let {name, value} = event.target;
        setArticle((prevArticle)=>{
            return {...prevArticle,
                [name]: value};
        });
    }
    

    async function submitArticle(event){
        // event.preventDefault();
        let userId = localStorage.getItem("userAuth");
        let raw = JSON.stringify({
            "title": article.title,
            "content": article.content,
            "imgUrl":article.imgUrl,
            "userId": userId
        });
        let requestOptions = {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: raw,
            redirect: 'follow'
        };
        console.log("requestOptions>>", requestOptions);
        try{
            let articleSubmit = await fetch('/submitArticle', requestOptions);
            articleSubmit = await articleSubmit.json();
            console.log("All Articles>", articleSubmit);
            let path = `/`; 
            navigate(path);
        }catch(err){
            console.log("Article submission failure>", err);
        }
    }

    return( <div class="compose-enclosure">
                <div class="page-title">
                <h1>Compose</h1>
                </div>
                <form  onSubmit={submitArticle}>
                    <div class="mb-3">
                    <label class="form-label subheading">Title</label>
                    <input onChange={articleChange} class="form-control bg-grey" name="title" value={article.title} required/>
                    <div class="form-text off-white">Please restrict to 20 words</div>
                    </div>
                    <div class="mb-3">
                    <label class="form-label subheading">Content</label>
                    <textarea onChange={articleChange} class="form-control bg-grey" name="content" value={article.content} cols="30" rows="10" required></textarea>
                    </div>
                    <div class="mb-3">
                    <label class="form-label subheading">Image URL</label>
                    <input onChange={articleChange} class="form-control bg-grey" name="imgUrl" value={article.imgUrl} />
                    </div>
                    <button type="submit" class="btn btn-success mb-5 btn-lg compose-btn">Compose</button>
                </form>
            </div>);
  }
  export default ArticleCompose;