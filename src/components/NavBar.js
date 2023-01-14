import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const myLinks = links.map((link)=>{
    return <a href={`#`+link} key={link} >{link}</a>
  })
  return <nav>
    {myLinks}
    </nav>;
}

export default NavBar;
