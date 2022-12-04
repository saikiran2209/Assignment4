import React, { useState, useEffect } from 'react'
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=df0a6d55743344d59f877284eb7f212b`;

const Apidata = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getAPI()

    }, [])
    const getAPI = async () => {
        try {
            const api_call = await fetch(API_URL);
            let data = await api_call.json();
            data = data.articles.slice(1)
            setArticles(data)
        }
        catch (e) { console.log("attempt to fetch failed", e) }
    }

    setInterval(getAPI, 60000);
    if (articles) {
        return (
            <div className="thridPartyApi">
                {articles.map((article) => {
                    var d = new Date(article.publishedAt)
                    return <div className="APIcontent" key={article.url}>
                        <h3>{article.title}</h3>
                        <img src={`${article.urlToImage}`} alt='news-image' style={{ height: '33vh', width: '38vw' }}></img>
                        <p className="source_des"><strong>{article.description}</strong></p>
                        <p className="source_name">{article.source.name}</p>
                        <p>{d.toLocaleDateString()}</p>
                        <p className="source_content">{article.content}</p>
                        <p className="source_url"><a target="_blank" href={article.url}>{article.url}</a></p>
                    </div>
                })}
            </div>
        );
    } else {
        return (
            <div className="thridPartyApi">API http request denied possibly because of reaching request limitation</div>
        )
    }

}

export default Apidata
