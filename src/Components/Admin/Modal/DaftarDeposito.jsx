import React, { useState, useEffect } from 'react';

const DaftarDepositoAdmin = () => {
  // Simulasi data deposito yang diinput oleh nasabah
  const [depositoData, setDepositoData] = useState([
    {
      id: 1,
      jenisDeposito: "Deposito Berjangka",
      nominal: 10000000,
      jangkaWaktu: 6,
      bunga: 5,
      status: "Disetujui",
      tanggalPengajuan: "2024-11-01",
    },
    {
      id: 2,
      jenisDeposito: "Deposito Online",
      nominal: 50000000,
      jangkaWaktu: 12,
      bunga: 6,
      status: "Menunggu Persetujuan",
      tanggalPengajuan: "2024-11-05",
    },
  ]);

  // Format tanggal pengajuan untuk tampilan yang lebih user-friendly
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Daftar Deposito Nasabah</h1>

      {/* Tabel Daftar Deposito */}
      <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Jenis Deposito</th>
              <th className="py-3 px-6 text-left">Nominal</th>
              <th className="py-3 px-6 text-left">Jangka Waktu (Bulan)</th>
              <th className="py-3 px-6 text-left">Suku Bunga (%)</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Tanggal Pengajuan</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {depositoData.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{index + 1}</td>
                <td className="py-3 px-6 text-left">{item.jenisDeposito}</td>
                <td className="py-3 px-6 text-left">{`Rp ${item.nominal.toLocaleString()}`}</td>
                <td className="py-3 px-6 text-left">{item.jangkaWaktu} Bulan</td>
                <td className="py-3 px-6 text-left">{item.bunga}%</td>
                <td className="py-3 px-6 text-left">{item.status}</td>
                <td className="py-3 px-6 text-left">{formatDate(item.tanggalPengajuan)}</td>
                <td className="py-3 px-6 text-left">
                  <button className="text-blue-500 hover:text-blue-700">
                    Lihat Detail
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

export default DaftarDepositoAdmin;