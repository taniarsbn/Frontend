import React from "react";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex  min-h-screen m-0 bg-white pt-10 ">
        <div
          className="flex p-5 mt-3 w-full "
        >
          <main className="min-h-screen m-0 w-full">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
