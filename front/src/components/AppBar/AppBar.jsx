import React from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function AppBar() {
  const user = useSelector((state) => state.user);

  return (
    <nav>
      <div className="topnav">
        <Link to="/">Cinder</Link>
        <div className="" id="navbarNav">
          <div className="">
            {user ? (
              <>
                <span className="">
                  <NavLink exact to="/logout" className="">
                    Выйти
                  </NavLink>
                </span>

                <h3 className="nav-item">
                  <NavLink exact to="/profile" className="">
                    Личный кабинет
                  </NavLink>
                </h3>
                <span className="nav-item">
                  <NavLink exact to="/test" className="">
                    Тест
                  </NavLink>
                </span>
              </>
            ) : (
              <>
                <span className="">
                  <NavLink exact to="/login" className="">
                    Войти
                  </NavLink>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
