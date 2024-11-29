import React from "react";
import { Link } from "react-router-dom";

const AjukanRek = () => {
  return (
    <div>
      <h1 className="mb-3">Ajukan Rekstruktrurisasi</h1>
      <Link className="btn-back  mt-2" to={-1}>
        Kembali
      </Link>
    </div>
  );
};

export default AjukanRek;
