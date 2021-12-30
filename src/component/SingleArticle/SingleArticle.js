import React from "react";

const SingleArticle = ({ article }) => {
  const { title, description, upvotes, date,img } = article;
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div
              className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
              style={{
                backgroundImage:
                  `url( ${img} )`,
                backgroundBlendMode: "multiply",
              }}
            ></div>
            <div className="md:hidden  absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-left text-2xl text-white leading-tight mb-2">
                {title}
              </h3>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h3 className="hidden md:block font-bold text-2xl text-left text-gray-700">
                {title}
              </h3>
              <p className="text-gray-600 text-justify">
                {description.slice(0, 250)}
              </p>
              <div className=" flex justify-between">
              <div>  <a
                  className="flex items-baseline text-blue-600 hover:text-blue-900 focus:text-blue-900"
                  href=""
                >
                  <span>{description.slice(0, 20)}</span>
                  <span className="text-xs ml-1">&#x279c;</span>
                </a></div>

                <div className=" flex ">
                  <div className="flex pr-4">
                    <svg
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    {upvotes}
                  </div>
                  <div className="flex">
                    <svg
                   
                   className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
