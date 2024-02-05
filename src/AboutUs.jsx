import React from 'react';

function AboutUs(){
    return(
        <div className="p-8 text-center text-[#222831]" id="aboutus">
            <p className="font-bold text-xl mb-2 md:text-2xl">Invest Smarter, Reach Goals Faster. AI guides your money, you enjoy the journey</p>
            <ul className='text-lg md:text-xl'>
                <li>AI understands your income, expenses, and dreams</li>
                <li>Get investment strategies, specific options, and clear steps</li>
                <li>AI helps you invest, you control your future</li>
            </ul>
            <hr className='border-[#222831] w-[100px] mx-auto border-dotted my-[25px] border-t-8' />
            <div>
                <p className='font-bold text-xl mb-2 underline'>Our Team</p>
                <p className='md:text-lg font-semibold'>Athul D Bhandary</p>
                <p className='md:text-lg font-semibold'>Devam Mavani</p>
                <p className='md:text-lg font-semibold'>Raksha Kamath B</p>
                <p className='md:text-lg font-semibold'>Swathi R Kini</p>
            </div>
        </div>
    );
}

export default AboutUs;