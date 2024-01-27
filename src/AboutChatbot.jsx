import React from 'react';

function AboutChatbot(){
    return(
        <div className="font-ubuntu p-5 bg-gold font-bold">
            <hr className='mb-5 border-black ' />
            <p className="text-2xl mb-2">Meet Your Smart Financial Coach: The AI Chatbot that Guides You to Wealth</p>
            <ul className="list-disc list-inside px-3">
                <li>Get to know you: FinAi bot asks all the right questions about your income, expenses, and financial goals. No judgment, just understanding</li>
                <li>Goals in sight: Whether it's a dream retirement, a stress-free future, or that special purchase, FinAi bot helps you define your aspirations and estimate the funds needed</li>
                <li>Personalized path to success: Based on your unique situation, FinAi bot creates a tailored investment plan</li>
            </ul>
            <p className=''>Click on the chat bot icon to get started</p>
            <hr className='mt-5 border-black' />
        </div>
    );
}

export default AboutChatbot;