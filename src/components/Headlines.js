

    import React from 'react'
    const Headlines = ({ articles }) => {
      return (
        <div>
          <center><h1>Headlines </h1></center>
           <div className="row">
          {articles.map((article) => (
            <div class="card col-md-3" style="width: 18rem;" key={index}>
               <img className="card-img-top" src={article.urlToImage} alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{ article.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{article.source.name</h6>
                <p className="card-text">{article.description}</p>
                <p className="card-text">$ {article.publishedAt}</p>
                <a className="btn btn-info ml-2" href={article.url}>Read More</a>
              </div>
            </div>
            </div>
          ))}
        </div>
      )
    };

    export default Headlines
