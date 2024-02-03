import React, { useState } from "react";

function Header() {
  const links = {
    home: "/",
    chatbot: "https://mediafiles.botpress.cloud/c077c495-b683-45ce-a6b8-9c0985245bb2/webchat/bot.html",
    articles: "#articles",
    aboutus: "#aboutus",
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="custom-bg">
      <div className="bg-[rgba(0,0,0,0.44)]">
        <nav className="px-5 py-3 justify-between text-white bg-[rgba(0,0,0,0.8)] w-full fixed md:flex md:backdrop-blur z-10 max-md:bg-black ">
          <p className="font-bold text-xl my-auto">FinAI</p>
          <div
            onClick={() => setOpen(!open)}
            className="absolute text-3xl top-4 right-5 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={` menu-items ${
              open ? "top-[51px]" : "top-[-490px]"
            } `}
          >
            <li className="max-md:m-3">
              <a className="nav-items" href={links.home}>
                Home
              </a>
            </li>
            <li className="max-md:m-3">
              <a className="nav-items" href={links.chatbot}>
                ChatBot
              </a>
            </li>
            <li className="m-3">
              <a className="nav-items" href={links.articles}>
                Articles
              </a>
            </li>
            <li className="max-md:m-3">
              <a className="nav-items" href={links.aboutus}>
                AboutUs
              </a>
            </li>
          </ul>
        </nav>
        <div className="h-[680px] p-10 text-white felx-col justify-center items-center">
          <p className="text-center text-7xl font-bold mt-[250px] [text-shadow:5px_5px_2px_var(--tw-shadow-color)] shadow-black max-sm:text-6xl">
            Welcome to FinAi
          </p>
          <p className="text-center mt-5 text-2xl [text-shadow:1px_2px_1px_var(--tw-shadow-color)] shadow-black max-sm:text-xl">
            a personalized investment management platform
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;