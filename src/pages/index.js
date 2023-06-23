import React, {useEffect, useState} from 'react';
import ArticleInfo from '../components/ArticleInfo';


const Home = () => {
	let [articles, setArticles] = useState([]);
	
	useEffect(() => {
		async function fetchArticles(){
			let response = await fetch('/getArticles');
			response = await response.json();
			// console.log("Articles fetched>", response.articles);
			setArticles(response.articles);
		}
		fetchArticles();
	  },[])
	return (
	<div class="container cta-100 ">
        <div class="container">
          <div class="row blog">
            <div class="col-md-12">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
						{articles.map(article=>(
							<ArticleInfo article={article}/>
						))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

   
	);
};

export default Home;
