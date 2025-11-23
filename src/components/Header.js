import React from "react";

const Header = ({backgroundPic, fontFamily})=>{
    console.log(backgroundPic);
     return (
       <header
            className="header text-center py-8 bg-cover bg-center text-white"
            style={{
                /* backgroundColor: "#024059", */
                backgroundImage: backgroundPic ? `url(${backgroundPic})` : "none",
  }}
       >
         <h1
           className="text-6xl font-bolder"
           style={{ fontFamily: `${fontFamily}` }}
         >
           My Hobbies
         </h1>
         <p className="text-lg">
           Timo Matis - Student of Web Development.
         </p>
       </header>
     );
}

export default Header;
