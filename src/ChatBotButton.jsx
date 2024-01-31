import chatBotIcon from "./assets/chat-bot.png";
import React from 'react';

function ChatBotButton() {

    const botlink = () => {
      window.location.href = ["https://mediafiles.botpress.cloud/c077c495-b683-45ce-a6b8-9c0985245bb2/webchat/bot.html"];
    };
    return (
      <button onClick={botlink} className="w-13 h-13 border border-[#222831] bg-[rgb(255,216,45)] fixed right-10 bottom-10 rounded-full p-3 max-md:right-5 shadow-lg shadow-black hover:bg-[rgb(78,78,78)]">
        <span className="icon-container">
          <img src={chatBotIcon} alt="Chat Bot Icon" className="w-10 h-10" />
        </span>
      </button>
    );
  }

export default ChatBotButton;