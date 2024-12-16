import React, { useState, useEffect } from 'react';

const AdminDaftarKredit = () => {
  const [daftarKredit, setDaftarKredit] = useState([]);
  const [selectedKredit, setSelectedKredit] = useState(null);

  useEffect(() => {
    // Simulasi pengambilan data daftar kredit dari API atau database
    const fetchDaftarKredit = () => {
      const data = [
        {
          id: 1,
          nama: 'John Doe',
          nomorKTP: '1234567890',
          telepon: '081234567890',
          alamat: 'Jl. Contoh No. 1',
          nomorKredit: '1234-5678-9012',
          jumlahPinjaman: '50,000,000',
          jangkaWaktu: '24 Bulan',
          sukuBunga: '14%',
          status: 'Pending',
        },
        {
          id: 2,
          nama: 'Jane Smith',
          nomorKTP: '9876543210',
          telepon: '082345678901',
          alamat: 'Jl. Contoh No. 2',
          nomorKredit: '5678-1234-9876',
          jumlahPinjaman: '100,000,000',
          jangkaWaktu: '36 Bulan',
          sukuBunga: '12%',
          status: 'Pending',
        },
        // Data lainnya dapat ditambahkan sesuai kebutuhan
      ];
      setDaftarKredit(data);
    };

    fetchDaftarKredit();
  }, []);

  const handleApprove = (id) => {
    setDaftarKredit((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: 'Approved' } : item
      )
    );
  };

  const handleReject = (id) => {
    setDaftarKredit((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: 'Rejected' } : item
      )
    );
  };

  const handleUpdateStatus = (id, status) => {
    setDaftarKredit((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: status } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Daftar Kredit yang Diajukan</h1>

      {/* Tabel Daftar Kredit */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Nomor Kredit</th>
              <th className="px-4 py-2 border border-gray-300">Jumlah Pinjaman</th>
              <th className="px-4 py-2 border border-gray-300">Jangka Waktu</th>
              <th className="px-4 py-2 border border-gray-300">Suku Bunga</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>
              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarKredit.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{item.nama}</td>
                <td className="px-4 py-2 border border-gray-300">{item.nomorKredit}</td>
                <td className="px-4 py-2 border border-gray-300">{item.jumlahPinjaman}</td>
                <td className="px-4 py-2 border border-gray-300">{item.jangkaWaktu}</td>
                <td className="px-4 py-2 border border-gray-300">{item.sukuBunga}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      item.status === 'Pending'
                        ? 'bg-yellow-500'
                        : item.status === 'Approved'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.status === 'Pending' && (
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
                  {item.status !== 'Pending' && (
                    <button
                      onClick={() => handleUpdateStatus(item.id, 'Pending')}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Reset to Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Kredit yang Dipilih */}
      {selectedKredit && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Detail Pengajuan Kredit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p><strong>Nama:</strong> {selectedKredit.nama}</p>
              <p><strong>Nomor KTP:</strong> {selectedKredit.nomorKTP}</p>
              <p><strong>Telepon:</strong> {selectedKredit.telepon}</p>
              <p><strong>Alamat:</strong> {selectedKredit.alamat}</p>
            </div>
            <div>
              <p><strong>Nomor Kredit:</strong> {selectedKredit.nomorKredit}</p>
              <p><strong>Jumlah Pinjaman:</strong> {selectedKredit.jumlahPinjaman}</p>
              <p><strong>Jangka Waktu:</strong> {selectedKredit.jangkaWaktu}</p>
              <p><strong>Suku Bunga:</strong> {selectedKredit.sukuBunga}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDaftarKredit;