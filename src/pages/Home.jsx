import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <ul>
        <li>
          <Link to="/">ListLayout</Link>
        </li>
        <li>
          <Link to="/cardlayout">CardLayout</Link>
        </li>
        <li>
          <Link to="/listpopout">ListPopOut</Link>
        </li>
        <li>
          <Link to="/cardpopout">CardPopOut</Link>
        </li>
        <li>
          <Link to="/listlayoutform">ListLayoutForm</Link>
        </li>
        <li>
          <Link to="/cardlayoutform">CardLayoutForm</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
