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

  const handleSortByUpvotes = (articles) => {
    const upvoteSortArticle = articles.sort(function (first, secound) {
      return new Date(secound.upvotes) - new Date(first.upvotes);
    });
    setArticles([...upvoteSortArticle]);
  };
  const handleSortByDate = (articles) => {
    console.log("inside date ");
    const dateSortedArticle = articles.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    setArticles([...dateSortedArticle]);
  };

  return (
    <div>
      <h1>This is AALL Article Page</h1>
      {/* <button
        onClick={() => {
          handleSortByDate(articles);
        }}
      >
        Most Recent{" "}
      </button>
      <button
        onClick={() => {
          handleSortByUpvotes(articles);
        }}
      >
        Most Upvote{" "}
      </button> */}

      <div class="relative inline-flex">
        <svg
          class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
          />
        </svg>
        <select class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option
            onChange={() => {
              handleSortByDate(articles);
            }}
          >
            MOST RECENT
          </option>
          <option
            onChange={() => {
              handleSortByUpvotes(articles);
            }}
          >
            MOST UPVOTED
          </option>
        </select>
      </div>
      {articles.map((article) => (
        <SingleArticle article={article}></SingleArticle>
      ))}
    </div>
  );
};

export default AllArticles;
