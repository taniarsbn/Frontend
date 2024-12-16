import React, { useState } from 'react';
import { MdDelete, MdCheckCircle } from 'react-icons/md';

const PengaduanAdmin = () => {
  // Simulasi data pengaduan yang diinput oleh nasabah
  const [pengaduanData, setPengaduanData] = useState([
    {
      id: 1,
      kategori: 'Layanan',
      isi: 'Layanan customer service tidak responsif.',
      tanggalPengaduan: '2024-11-01',
      status: 'Menunggu Tanggapan',
    },
    {
      id: 2,
      kategori: 'Produk',
      isi: 'Produk yang diterima rusak.',
      tanggalPengaduan: '2024-11-05',
      status: 'Tanggapan Dikirim',
    },
    {
      id: 3,
      kategori: 'Layanan',
      isi: 'Transaksi gagal tapi dana terpotong.',
      tanggalPengaduan: '2024-11-08',
      status: 'Menunggu Tanggapan',
    },
  ]);

  // Format tanggal pengaduan untuk tampilan yang lebih user-friendly
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID');
  };

  // Fungsi untuk mengubah status pengaduan
  const handleChangeStatus = (id) => {
    setPengaduanData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: 'Tanggapan Dikirim' } : item
      )
    );
  };

  // Fungsi untuk menghapus pengaduan
  const handleDelete = (id) => {
    setPengaduanData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Pengaduan Nasabah</h1>

      {/* Tabel Daftar Pengaduan */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Kategori</th>
              <th className="py-3 px-6 text-left">Isi Pengaduan</th>
              <th className="py-3 px-6 text-left">Tanggal Pengaduan</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {pengaduanData.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{item.kategori}</td>
                <td className="py-3 px-6 text-left">{item.isi}</td>
                <td className="py-3 px-6 text-left">{formatDate(item.tanggalPengaduan)}</td>
                <td className="py-3 px-6 text-left">{item.status}</td>
                <td className="py-3 px-6 text-left">
                  <button
                    onClick={() => handleChangeStatus(item.id)}
                    className="text-green-500 hover:text-green-700 mr-2"
                  >
                    <MdCheckCircle size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
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

export default PengaduanAdmin;