import { useState } from "react";
import fetch from 'cross-fetch';


function ArticleCompose(){
    const [article, setArticle] = useState({
        "title":"",
        "content":""
    });
    // const [data, setData] = useState(null);

    function articleChange(event){
        let {name, value} = event.target;
        setArticle((prevArticle)=>{
            return {...prevArticle,
                [name]: value};
        });
    }
    

    async function submitArticle(event){
        let raw = JSON.stringify({
            "title": article.title,
            "content": article.content
        });
        // event.preventDefault();
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
        }catch(err){
            console.log("Article submission failure>", err);
        }
        
    
    }

    return( <div>
                <div class="page-title">
                <h1>Compose</h1>
                </div>
                <form  onSubmit={submitArticle}>
                    <div class="mb-3">
                    <label class="form-label subheading">Title</label>
                    <input onChange={articleChange} class="form-control bg-grey" name="title" value={article.title} />
                    <div class="form-text">Please restrict to 20 words</div>
                    </div>
                    <div class="mb-3">
                    <label class="form-label subheading">Content</label>
                    <textarea onChange={articleChange} class="form-control bg-grey" name="content" value={article.content} cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-lg">Compose</button>
                </form>
            </div>);
  }
  export default ArticleCompose;