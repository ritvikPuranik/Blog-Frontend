import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import NotFound from '../components/404';


function DisplayFullArticle(){
    const navigate = useNavigate();
    const {articleId} = useParams(); 
    const [article, setArticle] = useState({});
    useEffect(() => {
        fetchArticleDetails();
        },[]);

    const goToFeed = async()=>{
        let path = `/`; 
        navigate(path);
    }

    const goTo404 = async()=>{
        let path = `/notFound`; 
        navigate(path);
    }
    
    const fetchArticleDetails = async()=>{
        try{
            let articleContent = await fetch(`/viewArticle/${articleId}`);
            console.log("response status>>", articleContent.status);
            if(articleContent.status === 200){
                articleContent = await articleContent.json();
                console.log("article Content>", articleContent);
                setArticle(articleContent.result);
            }else{
                console.log("Article Not Found");
                goTo404();
            }
        }catch(err){
            console.log("viewArticle Failure failure>", err);
        }
    }

    return(
        <div class="container cta-100 ">
                <div class="item-box-blog" style={{"margin-bottom": "250px"}}>
                    <div class="p-4 mt-3 shadow-4 rounded-3" >
                        <h1>{article.title}</h1>
                        <p>
                            {article.content}
                        </p>
                        <button type="button" onClick={goToFeed} class="btn btn-secondary mt-5">
                            Go Back
                        </button>
                    </div>
                </div>
        </div>

        );
}

export default DisplayFullArticle;



