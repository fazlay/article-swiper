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
        // console.log(data);
      });
  }, []);

  //   articles.sort(function (first, secound) {
  //     return new Date(secound.upvotes) - new Date(first.upvotes);
  //   });

  const handleSortByUpvotes = (articles) => {};
  const handleSortByDate = (articles) => {
    console.log("inside date ");
    const dateSortedArticle = articles.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    return setArticles([...dateSortedArticle]);
  };

  return (
    <div>
      <h1>This is AALL Article Page</h1>
      <button
        onClick={() => {
          handleSortByDate(articles);
        }}
      >
        Most Recent{" "}
      </button>
      {articles.map((article) => (
        <SingleArticle article={article}></SingleArticle>
      ))}
    </div>
  );
};

export default AllArticles;
