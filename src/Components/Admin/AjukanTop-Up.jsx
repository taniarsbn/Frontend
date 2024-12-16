import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AdminTopUp = () => {
  const [pengajuanTopUp, setPengajuanTopUp] = useState([]);
  const [selectedPengajuan, setSelectedPengajuan] = useState(null);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Simulasi pengambilan data pengajuan top-up dari API
    const fetchPengajuanTopUp = () => {
      const data = [
        {
          id: 1,
          nama: "John Doe",
          nomorKTP: "1234567890",
          telepon: "081234567890",
          alamat: "Jl. Contoh No. 1",
          nomorKredit: "1234-5678-9012",
          jumlahTopUp: "10,000,000",
          alasanTopUp: "Meningkatkan modal usaha",
          status: "Pending",
        },
        {
          id: 2,
          nama: "Jane Smith",
          nomorKTP: "9876543210",
          telepon: "082345678901",
          alamat: "Jl. Contoh No. 2",
          nomorKredit: "5678-1234-9876",
          jumlahTopUp: "15,000,000",
          alasanTopUp: "Pembelian inventaris tambahan",
          status: "Pending",
        },
        // Tambahkan data pengajuan lainnya sesuai kebutuhan
      ];
      setPengajuanTopUp(data);
    };

    fetchPengajuanTopUp();
  }, []);

  const handleApprove = (id) => {
    setPengajuanTopUp((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
  };

  const handleReject = (id) => {
    setPengajuanTopUp((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: "Rejected" } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Pengajuan Top-Up Kredit
      </h1>

      {/* Daftar Pengajuan Top-Up Kredit */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Nomor Kredit</th>
              <th className="px-4 py-2 border border-gray-300">
                Jumlah Top-Up
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Alasan Top-Up
              </th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              {user?.role === "admin" && (
                <th className="px-4 py-2 border border-gray-300">Aksi</th>
              )}
            </tr>
          </thead>
          <tbody>
            {pengajuanTopUp.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.nama}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.nomorKredit}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.jumlahTopUp}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.alasanTopUp}
                </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        item.status === "Pending"
                          ? "bg-yellow-500"
                          : item.status === "Approved"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                {user?.role === "admin" && (
                  <td className="px-4 py-2 border border-gray-300">
                    {item.status === "Pending" && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-md"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Pengajuan Top-Up Kredit */}
      {selectedPengajuan && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Detail Pengajuan Top-Up Kredit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p>
                <strong>Nama:</strong> {selectedPengajuan.nama}
              </p>
              <p>
                <strong>Nomor KTP:</strong> {selectedPengajuan.nomorKTP}
              </p>
              <p>
                <strong>Telepon:</strong> {selectedPengajuan.telepon}
              </p>
              <p>
                <strong>Alamat:</strong> {selectedPengajuan.alamat}
              </p>
            </div>
            <div>
              <p>
                <strong>Nomor Kredit:</strong> {selectedPengajuan.nomorKredit}
              </p>
              <p>
                <strong>Jumlah Top-Up:</strong> {selectedPengajuan.jumlahTopUp}
              </p>
              <p>
                <strong>Alasan Top-Up:</strong> {selectedPengajuan.alasanTopUp}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTopUp;
