import React, { useState } from "react";

function Header() {
  const links = {
    home: "#",
    chatbot: "https://botpress.com/",
    articles: "#",
    aboutus: "#",
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="custom-bg font-ubuntu">
      <div className="bg-[rgba(0,0,0,0.44)]">
        <nav className="p-5 justify-between text-white bg-[rgba(0,0,0,0.8)] w-full fixed md:flex">
          <p className="font-bold text-xl">FinAI</p>
          <div
            onClick={() => setOpen(!open)}
            className="absolute text-3xl top-4 right-5 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center backdrop-blur text-center max-md:bg-[rgba(0,0,0,0.8)] ${
              open ? "top-[68px]" : "top-[-490px]"
            } md:static fixed w-full md:max-w-[400px] max-md:left-0 overflow-hidden transition-all duration-500 ease-in`}
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
        <div className="h-[650px] p-10 text-white felx-col justify-center items-center">
          <p className="text-center text-6xl font-bold mt-[200px]">
            Welcome to FinAi
          </p>
          <p className="text-center mt-5 text-xl">
            a personalized investment management platform
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;