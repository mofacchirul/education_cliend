import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/Provider/Auth";
import UseAdmin from "../../DashBord/UseAdmin";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isadmin] = UseAdmin()  // Ensure UseAdmin correctly provides the admin status
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/course" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="/academic" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Academics
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/admissions" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Admissions
        </NavLink>
      </li>
      <li>
        <NavLink to="/my_applications" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog_page" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink to="/announcements" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
        Announcements
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact_page" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
          Contact
        </NavLink>
      </li>
      
      {/* Only show Dashboard link if the user is an admin */}
      {isadmin && (
        <li>
          <NavLink to="/dashbord/all_user" className={({ isActive }) => (isActive ? "bg-teal-900 text-white" : "")}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm  shadow-md">
      <div className="navbar sticky top-0 z-50 backdrop-blur-sm  shadow-md">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
             </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          {/* Logo for Large Screens */}
          <div className="hidden lg:flex">
            <img src="https://i.ibb.co/LhhMkDfw/logo.png" alt="Logo" className="w-32" />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Logo for Mobile View */}
        <div className="lg:hidden">
          <img src="https://i.ibb.co/LhhMkDfw/logo.png" alt="Logo" className="lg:w-28 w-32  -ml-14" />
        </div>

        {/* Authentication Buttons */}
        <div className="navbar-end space-x-2">
          {user ? (
            <>
              <button onClick={signOutUser} className="lg:px-4 px-2 py-2 bg-amber-500 text-white rounded-tr-2xl rounded-bl-2xl hover:bg-teal-950 lg:text-xl text-sm">
                Sign Out
              </button>
              <Link to="/applycation_from">
                <button className="lg:px-4 px-2 py-2 bg-teal-800 text-white rounded-tl-2xl rounded-br-2xl hover:bg-yellow-500 lg:text-xl text-sm">
                  Apply Now
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="lg:px-4 px-2 py-2 bg-teal-800 text-white rounded-tr-2xl rounded-bl-2xl hover:bg-yellow-500 lg:text-xl text-sm">
                  Login
                </button>
              </Link>
              <Link to="/applycation_from">
                <button className="lg:px-4 px-2 py-2 bg-yellow-500 text-white rounded-tl-2xl rounded-br-2xl hover:bg-teal-800 lg:text-xl text-sm">
                  Apply Now
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
