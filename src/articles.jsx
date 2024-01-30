import React from "react";
import Book1 from "./assets/book1.jpg"
import Book2 from "./assets/book2.jpg"
import Book3 from "./assets/book3.jpg"

function Articles() {

    const sitelink1=["https://calvinrosser.com/notes/psychology-of-money-morgan-housel/"];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 content-cente mx-5 my-4 text-white max-sm:grid-cols-1 text-center">
        <div className="card">
          <img src={Book1} className="h-[250px] m-auto p-3" alt="psycology of money" />
          <p className="">Summary of the psycology of money</p>
          <button onClick={() => window.open(sitelink1)} className="card-button">Check it out</button>
        </div>
        <div className="card">
          <img src={Book2} className="h-[250px] m-auto p-3" alt="psycology of money" />
          <p className="">Summary of Rich Dad Poor Dad</p>
          <button onClick={() => window.open(sitelink2)} className="card-button">Check it out</button>
        </div>
        <div className="card">
          <img src={Book3} className="h-[250px] m-auto p-3" alt="psycology of money" />
          <p className="">Summary of The Simple Path to Wealth</p>
          <button onClick={() => window.open(sitelink3)} className="card-button">Check it out</button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
