import React from 'react';
import { useNavigate } from 'react-router-dom';
const fetch = require('cross-fetch');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

function ArticleInfo(props){
    let navigate = useNavigate();
    let articleMeta = JSON.parse(props.article.meta);
    let createdAt = function (dateOfPublish){
        let date = new Date(dateOfPublish);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let dateString = `${months[month]}, ${day}`;
        // console.log(`Date: ${months[month]}, ${day}`);
        return dateString;
    }

    let viewArticle = async function(event){
        let articleId = event.target.id;
        let path = `/${articleId}`; 
        navigate(path);
    }

    // console.log("props>", props.article);
    return(<div class="col-md-4" >
            <div class="item-box-blog">
                <div class="item-box-blog-image">
                <div class="item-box-blog-date bg-blue-ui white"> <span class="mon">{createdAt(props.article.createdAt)}</span> </div>
                <figure> <img alt="" src={articleMeta && articleMeta.imgUrl} /></figure>
                </div>
                <div class="item-box-blog-body">
                <div class="item-box-blog-heading">
                    <a href="#">
                    <h5>{props.article.title}</h5>
                    </a>
                </div>
                <div class="item-box-blog-data" style={{padding: "px 15px"}}>
                    <p><i class="fa fa-user-o"></i> Admin, <i class="fa fa-comments-o"></i> Comments(3)</p>
                </div>
                <div class="item-box-blog-text">
                    <p>{props.article.content}</p>
                </div>
                <span  class="mt"> 
                    <button onClick={viewArticle} id={props.article.id}  class="btn bg-blue-ui white read">Read More</button> 
                </span>
                </div>
            </div>
            </div>)
}

export default ArticleInfo;