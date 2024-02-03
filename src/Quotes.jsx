import React from "react";

function Quotes() {
  return (
    <div>
      <blockquote className="border-l-4px-8 py-4 my-4 text-center" id="articles">
        <p className="text-gray-700 font-extrabold text-3xl text-center mb-1 max-sm:text-xl px-2">
          "Never depend on a single income. Make an investment to create a second source"
        </p>
        <cite className="text-gray-500 text-xl max-sm:text-lg">- Warren Buffett</cite>
      </blockquote>
    </div>
  );
}

export default Quotes;
