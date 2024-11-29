import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import NavbarAdmin from "./NavbarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <div className="flex  min-h-screen m-0 bg-white pt-10 ">
        <div className="sm:block hidden">
          <SidebarAdmin />
        </div>
        <div
          className="flex p-2 pt-5 sm:p-5  mt-7 w-full"
          style={{
            backgroundRepeat: "no-repeat",
          }}
        >
          <main className="min-h-screen m-0 w-full sm:ml-[300px] ">
            {children}
           
          </main>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;