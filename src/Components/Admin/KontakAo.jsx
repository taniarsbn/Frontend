import React from "react";
import { Link } from "react-router-dom";

const KontakAo = () => {
  return (
    <div>
      <h1>Kontak Ao</h1>
      <div className="flex items-center gap-2 mt-2 ">
        <Link to={"/chat-ao"}
          className="btn-add hidden sm:block"
        >
         Chat AO 
        </Link>
       
      </div>
    </div>
  );
};

export default KontakAo;
