import React from "react";

const Review = () => {
  return (
    <div>
      <div className="bg-[#4e9bc4] text-white py-3 flex flex-col items-center px-15 gap-3 sm:flex-row sm:justify-between sm:py-5 md:py-8">
        <h1 className="text-xl md:text-3xl font-bold">Leave Your Review </h1>
        <button
          className=" bg-[#233876]
          hover:cursor-pointer font-semibold rounded-lg text-base h-fit px-2 py-1 md:text-xl md:px-3"
        >
          <a
            href="https://www.google.com/search?sca_esv=ea28a01ba0d65b63&sxsrf=AHTn8zoAzmoWPs0_JYIsdazMwXFz6AJx4Q:1744352447390&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzcW6IvVAF57qsa_SIj4zjf5BtGkseGlCk7_1wZkDxVHt741o_ki-REgWKXbhc82M_CsWmwvcX2w2kuLiGtZZWMqcEMrwTeUcGhfYDvwrUFa_3wrUUw%3D%3D&q=Amar+Humanoid+Rehab+clinic+Reviews&sa=X&ved=2ahUKEwjLpfWfq8-MAxWLbPUHHf-8FHkQ0bkNegQIJhAE&biw=1280&bih=551&dpr=1.5"
            target="_blank"
          >
            Add Review
          </a>
        </button>
      </div>
    </div>
  );
};

export default Review;
