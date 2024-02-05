import React from "react";

function AboutChatbot() {
  return (
    <div className="p-8 bg-gold font-bold text-[#222831]">
      <hr className="mb-5 border-black " />
      <p className="text-2xl mb-2">
        Meet Your Smart Financial Coach: The AI Chatbot that Guides You to
        Wealth
      </p>
      <ul className="list-disc list-inside px-3">
        <li className="about-aibot-list"><span className="font-bold">Get to know you : </span>
          FinAi bot asks all the right questions about your
          income, expenses, and financial goals. No judgment, just understanding
        </li>
        <li className="about-aibot-list"><span className="font-bold">Goals in sight : </span>
          Whether it's a dream retirement, a stress-free future,
          or that special purchase, FinAi bot helps you define your aspirations
          and estimate the funds needed
        </li>
        <li className="about-aibot-list"><span className="font-bold">Personalized path to success : </span>
          Based on your unique situation, FinAi
          bot creates a tailored investment plan
        </li>
      </ul>
      <p className="">Click on the chat bot icon and send a <span className="font-bold text-xl">Hello!</span> to get started</p>
      <hr className="mt-5 border-black" />
    </div>
  );
}

export default AboutChatbot;
