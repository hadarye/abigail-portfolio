import React, { useContext } from "react";
import './NavBar.styles.scss'
import CursorContext from "../Cursor/context/CursorContext";


const NavBar = () => {
  const { setType } = useContext(CursorContext);
  const NavStrs = [
    {
      "name": "Home",
      "navigateLocation": ""
    },
    {
      "name": "Gallery",
      "navigateLocation": ""
    },
    {
      "name": "Videos",
      "navigateLocation": ""
    },
    {
      "name": "About Me",
      "navigateLocation": ""
    }
  ]

  return (
    <div className='nav-bar' onMouseEnter={() => setType("hamburger")} onMouseLeave={() => setType("default")}>
      {NavStrs.map((element) => (
        <p>{element.name}</p>
      ))}
    </div>
  )
}
export default NavBar
