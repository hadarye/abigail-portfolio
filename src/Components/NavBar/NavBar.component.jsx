import React, { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './NavBar.styles.scss'
import CursorContext from "../Cursor/context/CursorContext";


const NavBar = () => {
  const { setType } = useContext(CursorContext);
  const navigate = useNavigate();
  const NavStrs = [
    {
      "name": "Home",
      "navigateLocation": "home"
    },
    {
      "name": "Gallery",
      "navigateLocation": "gallery"
    },
    {
      "name": "Videos",
      "navigateLocation": "videos"
    },
    {
      "name": "About Me",
      "navigateLocation": "about-me"
    }
  ]

  return (
    <>
      <div className='nav-bar' onMouseEnter={() => setType("hamburger")} onMouseLeave={() => setType("default")}>
        {NavStrs.map((element) => (
          <p key={element.name} onClick={() => navigate(element.navigateLocation)}>{element.name}</p>
        ))}

      </div>
      <main>
        <Outlet />
      </main>
      </>
  )
}
export default NavBar
