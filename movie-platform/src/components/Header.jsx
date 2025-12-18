import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header>
      <div>
      <h1>Movie Dashboard</h1>
      </div>

      
      <NavLink
          to="/"
          >
             Home
          </NavLink>
        
        <div>
          <NavLink
           to="/movies"
           >
             Movies
           </NavLink>
            </div>

            <div>
           <NavLink
             to="/about"
             >
                About
             </NavLink>
             </div>
             
             <div>
             <button
           onClick={() => setDark(!dark)}>
            <span>
                {dark ? "☀️" : "🌙"}
            </span>
           </button>
           </div>
    </header>
    
  );
};

export default Header;
