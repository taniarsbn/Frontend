import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import { FaTimes } from "react-icons/fa";

const SidebarAdmin = ({ tutupSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Detect active route and keep dropdown open
    const path = location.pathname;
    if (path.startsWith("/deposito")) {
      setOpenDropdown("deposito");
    } else if (path.startsWith("/kredit")) {
      setOpenDropdown("kredit");
    } else {
      setOpenDropdown(null);
    }
  }, [location]);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };

  const tutup = (tf) => {
    tutupSidebar(tf);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/masuk");
  };

  const getNavLinkClass = ({ isActive }) =>
    `block p-3 pl-10 ${isActive ? "bg-[#81B5FA]" : "hover:bg-gray-200"}`;

  return (
    <aside className="mt-0 sm:mt-7 w-[300px] fixed bg-white drop-shadow-xl overflow-y-scroll h-[100%] sm:h-[90%] ">
      <div className="mb-4 px-2 sm:p-4 bg-gray-50 drop-shadow-xl">
        <div className="flex justify-between px-2">
          <button onClick={() => tutup(false)} className="sm:hidden block">
            <FaTimes size={21} />
          </button>
          <div className="mr-2">
            {user && (
              <div className="">
                <h1 className="text-xl font-bold text-end sm:text-left">
                  {user.name}
                </h1>
                <h1 className="text-lg text-end sm:text-left">{user.role}</h1>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-semibold pl-4 mb-0">Menu</h1>
        <nav>
          <NavLink to="/dasbor" className={getNavLinkClass}>
            Beranda
          </NavLink>

          {/* Deposito */}
          <div className="relative">
            <button
              className="flex items-center justify-between w-full p-3 pl-10 hover:bg-gray-200"
              onClick={() => toggleDropdown("deposito")}
            >
              <span>Deposito</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  openDropdown === "deposito" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openDropdown === "deposito" && (
              <div className="pl-6 transition-all duration-500 ease-out">
                <NavLink to="/deposito/simulasi" className={getNavLinkClass}>
                  Simulasi Deposito
                </NavLink>
              </div>
            )}
          </div>

          {/* Kredit */}
          <div className="relative">
            <button
              className="flex items-center justify-between w-full p-3 pl-10 hover:bg-gray-200"
              onClick={() => toggleDropdown("kredit")}
            >
              <span>Kredit</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  openDropdown === "kredit" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openDropdown === "kredit" && (
              <div className="pl-6 transition-all duration-500 ease-out">
                <NavLink to="/kredit/simulasi" className={getNavLinkClass}>
                  Simulasi Kredit
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/pengaduan" className={getNavLinkClass}>
            Pengaduan
          </NavLink>
          <NavLink to="/kontak-ao" className={getNavLinkClass}>
            Kontak AO
          </NavLink>
          <button className="flex pl-4 pb-5 w-full" onClick={logout}>
            Keluar
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
