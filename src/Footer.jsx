import React from "react";

function Footer(){

    const currentYear=new Date().getFullYear();

    return(
        <div className="bg-[#222831] text-center text-lg text-white">
            <p>{'\u00A9'} {currentYear} FinAi</p>
        </div>
    );
}

export default Footer;