import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user.photoURL)
  const handleSignOut = () => {
    signOutUser()
      .then((request) => {
        console.log(request.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="w-[140px]">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          to={"/artAndCraft"}
        >
          All Art & craft Items
        </NavLink>
      </li>

      {user && (
        <>
          <li className="w-[110px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              to={"/addCraftItem"}
            >
              Add Craft Item
            </NavLink>
          </li>
          <li className="w-[132px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              to={"/myCraftList"}
            >
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const [theme, setTheme] = useState("night");
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "night" : "light");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 w-full border-b-2 backdrop-filter backdrop-blur-lg">
      <div
        className={`navbar lg:px-20  ${
          showBackground ? "bg-opacity-30" : "bg-transparent"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className=" font-bold text-xl md:text-4xl">
            Canvas <span className="text-blue-400">Engine</span>
          </Link>
        </div>
        <div className=" hidden lg:flex">
          <ul className=" menu-horizontal gap-3">{navLink}</ul>
        </div>
        <div className="navbar-end w-full md:w-1/2 ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                  className="w-10 rounded-full"
                >
                  <Tooltip id="my-tooltip" />
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>

                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link className="btn bg-blue-400 text-white" to={"/login"}>
                Login
              </Link>
              <Link className="btn bg-blue-400 text-white" to={"/registration"}>
                Registration
              </Link>
            </>
          )}
          <label className="swap pl-4 swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onClick={toggleTheme}
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
