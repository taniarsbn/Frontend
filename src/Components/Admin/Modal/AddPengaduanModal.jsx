import axios from "axios";
import React, { useState } from "react";

const AddPengaduanModal = ({ setIsOpenModalAdd, getPengaduan }) => {
  const [kategoriLaporan, setKategoriLaporan] = useState("");
  const [kategoriLainnya, setKategoriLainnya] = useState("");
  const [isiPengaduan, setIsiPengaduan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:5000/pengaduan", {
        kategori: kategoriLaporan === "lainnya" ? kategoriLainnya : kategoriLaporan,
        isi: isiPengaduan,
      });
      getPengaduan();
      setIsOpenModalAdd(false); 
    } catch (error) {
      console.log(error);
    }
    console.log("Kategori:", kategoriLaporan === "lainnya" ? kategoriLainnya : kategoriLaporan, "Isi:", isiPengaduan);
  };
  
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 flex items-center justify-center bg-gray-500 z-top bg-opacity-30"
    >
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">Tambah Pengaduan</h3>
            <button
              type="button"
              onClick={() => setIsOpenModalAdd(false)}
              className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="mb-6">
              <label htmlFor="kategori-laporan" className="label">
                Kategori Laporan
              </label>
              <select
                id="kategori-laporan"
                value={kategoriLaporan}
                onChange={(e) => {
                  setKategoriLaporan(e.target.value);
                  if (e.target.value !== "lainnya") {
                    setKategoriLainnya(""); // Clear the custom category input if not "Lainnya"
                  }
                }}
                className="block w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="" disabled>Select Kategori</option>
                <option value="kredit">Kredit</option>
                <option value="deposito">Deposito</option>
                <option value="pelayanan_ao">Pelayanan AO</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>

            {/* Conditional Input for "Lainnya" */}
            {kategoriLaporan === "lainnya" && (
              <div className="mb-6">
                <label htmlFor="kategori-lainnya" className="label">
                  Kategori Lainnya
                </label>
                <input
                  type="text"
                  id="kategori-lainnya"
                  value={kategoriLainnya}
                  onChange={(e) => setKategoriLainnya(e.target.value)}
                  className="block w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="isi-pengaduan" className="label">
                Isi Pengaduan
              </label>
              <textarea
                id="isi-pengaduan"
                value={isiPengaduan}
                onChange={(e) => setIsiPengaduan(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-end p-4 space-x-3 border-t border-gray-200 rounded-b">
            <button type="submit" className="btn btn-simpan">
              Simpan
            </button>
            <button
              onClick={() => setIsOpenModalAdd(false)}
              type="button" // Change to type="button" to avoid form submission
              className="btn-batal"
            >
              Batal
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPengaduanModal;
