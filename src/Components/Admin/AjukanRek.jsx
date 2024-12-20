import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AdminRestrukturisasi = () => {
  const [pengajuanRestrukturisasi, setPengajuanRestrukturisasi] = useState([]);
  const [selectedPengajuan, setSelectedPengajuan] = useState(null);
  
  useEffect(() => {
    // Simulasi pengambilan data pengajuan restrukturisasi dari API
    const fetchPengajuanRestrukturisasi = () => {
      const data = [
        {
          id: 1,
          nama: 'John Doe',
          nomorKTP: '1234567890',
          telepon: '081234567890',
          alamat: 'Jl. Contoh No. 1',
          nomorKredit: '1234-5678-9012',
          jumlahPinjamanTersisa: '50,000,000',
          angsuranBulanan: '5,000,000',
          jumlahPinjamanOnline: '10,000,000',
          jumlahPengajuan: '40,000,000',
          jangkaWaktuBaru: '24',
          status: 'Pending',
        },
        {
          id: 2,
          nama: 'Jane Smith',
          nomorKTP: '9876543210',
          telepon: '082345678901',
          alamat: 'Jl. Contoh No. 2',
          nomorKredit: '5678-1234-9876',
          jumlahPinjamanTersisa: '100,000,000',
          angsuranBulanan: '10,000,000',
          jumlahPinjamanOnline: '20,000,000',
          jumlahPengajuan: '60,000,000',
          jangkaWaktuBaru: '36',
          status: 'Pending',
        },
        // Tambahkan data pengajuan lainnya sesuai kebutuhan
      ];
      setPengajuanRestrukturisasi(data);
    };

    fetchPengajuanRestrukturisasi();
  }, []);

  const handleApprove = (id) => {
    setPengajuanRestrukturisasi((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: 'Approved' } : item
      )
    );
  };

  const handleReject = (id) => {
    setPengajuanRestrukturisasi((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: 'Rejected' } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Pengajuan Restrukturisasi Kredit</h1>

      {/* Daftar Pengajuan Restrukturisasi Kredit */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">No</th>
              <th className="px-4 py-2 border border-gray-300">Nama</th>
              <th className="px-4 py-2 border border-gray-300">Nomor Kredit</th>
              <th className="px-4 py-2 border border-gray-300">Jumlah Pengajuan</th>
              <th className="px-4 py-2 border border-gray-300">Jangka Waktu Baru</th>
              <th className="px-4 py-2 border border-gray-300">Status</th>

              <th className="px-4 py-2 border border-gray-300">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pengajuanRestrukturisasi.map((item, index) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{item.nama}</td>
                <td className="px-4 py-2 border border-gray-300">{item.nomorKredit}</td>
                <td className="px-4 py-2 border border-gray-300">{item.jumlahPengajuan}</td>
                <td className="px-4 py-2 border border-gray-300">{item.jangkaWaktuBaru} bulan</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Pengajuan Restrukturisasi Kredit */}
      {selectedPengajuan && (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">Detail Pengajuan Restrukturisasi Kredit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <p><strong>Nama:</strong> {selectedPengajuan.nama}</p>
              <p><strong>Nomor KTP:</strong> {selectedPengajuan.nomorKTP}</p>
              <p><strong>Telepon:</strong> {selectedPengajuan.telepon}</p>
              <p><strong>Alamat:</strong> {selectedPengajuan.alamat}</p>
            </div>
            <div>
              <p><strong>Nomor Kredit:</strong> {selectedPengajuan.nomorKredit}</p>
              <p><strong>Jumlah Pinjaman Tersisa:</strong> {selectedPengajuan.jumlahPinjamanTersisa}</p>
              <p><strong>Angsuran Bulanan:</strong> {selectedPengajuan.angsuranBulanan}</p>
              <p><strong>Jumlah Pengajuan Restrukturisasi:</strong> {selectedPengajuan.jumlahPengajuan}</p>
              <p><strong>Jangka Waktu Baru:</strong> {selectedPengajuan.jangkaWaktuBaru} bulan</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRestrukturisasi;
