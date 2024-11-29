import React, { useEffect, useState } from "react";
import AddPengaduanModal from "./Modal/AddPengaduanModal";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const Pengaduan = () => {
  const [openPengaduan, setOpenPengaduan] = useState(false);
  const [pengaduan, setPengaduan] = useState([]);

  const getPengaduan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pengaduan");
      setPengaduan(response.data);
    } catch (error) {
      console.error("Error fetching pengaduan:", error);
    }
  };

  useEffect(() => {
    getPengaduan();
  }, []);

  const hapusPengaduan = async(idPengaduan)=> {
    try {
      await axios.delete(`http://localhost:5000/pengaduan/${idPengaduan}`)
      getPengaduan();
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      {openPengaduan && (
        <AddPengaduanModal
          setIsOpenModalAdd={setOpenPengaduan}
          getPengaduan={getPengaduan} // Pass the getPengaduan function to refresh data after adding
        />
      )}
      <h1>Pengaduan</h1>
      <button className="btn-add mt-3" onClick={() => setOpenPengaduan(true)}>
        Tambah Pengaduan
      </button>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Kategori</th>
              <th className="py-3 px-6 text-left">Isi</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {pengaduan.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {index + 1}
                </td>
                <td className="py-3 px-6 text-left">{item?.kategori}</td>
                <td className="py-3 px-6 text-left">{item?.isi}</td>
                <td className="py-3 px-6 text-left">
                  <button onClick={()=> hapusPengaduan(item?.id)} className="text-red-500 hover:text-red-700">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pengaduan;
