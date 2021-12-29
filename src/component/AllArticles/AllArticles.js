import React, { useEffect,useState } from 'react'

const AllArticles = () => {
    const [articles, setArticles]=useState([])

useEffect(() => {
 fetch('data.json')
 .then(res=>res.json())
 .then(data=>{
    setArticles(data) 
    console.log(data)}) 
}, [])

articles.sort(function(first,secound){
    return(secound.upvotes-first.upvotes)
})


    return (
        <div>
    <h1>This is AALL Article Page</h1>
    {articles.map(article=><h1>{article.title} UPVOTE--------- {article.upvotes}</h1>)}
        </div>
    )
}

export default AllArticles
