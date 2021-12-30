import React, { useEffect, useState } from "react";
import SingleArticle from "../SingleArticle/SingleArticle";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(
          data.sort(function (first, secound) {
            return new Date(secound.upvotes) - new Date(first.upvotes);
          })
        );
       
      });
  }, []);

  
// ----------------------------------------------------------sorting Handler 
const handleArticleSorting=(e)=>{
switch (e.target.value) {
  case "date":
    const dateSortedArticle = articles.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    setArticles([...dateSortedArticle]);
    // console.log("we called date");
    break;

  case "upvote":
    const upvoteSortArticle = articles.sort(function (first, secound) {
          return new Date(secound.upvotes) - new Date(first.upvotes);
        });
        setArticles([...upvoteSortArticle]);
    // console.log("we called upvote");
    break;

  default:
    console.log("this is default funtion");
    break;
}
  
}

  return (
    <div className="px-16 mt-16">
    
     <div className="flex justify-between border-b-2 items-center">
      <h1 className="font-bold text-sm text-slate-400 uppercase"> Showing top 007 ARTICLES . .</h1>
     <div className="relative inline-flex">
        <svg
          className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
       
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
          />
        </svg>
        <select onChange={handleArticleSorting} className="border-0 font-bold text-slate-400 h-10 pl-5 pr-10 bg-white hover:text-gray-800 focus:outline-none appearance-none">
          <option  value="upvote">
            MOST UPVOTED
          </option>
          <option value="date">
            MOST RECENT
          </option>
        </select>
      </div>
     </div>
      {articles.map((article) => (
        <SingleArticle key={article.id} article={article}></SingleArticle>
      ))}
    </div>
  );
};

export default AllArticles;
