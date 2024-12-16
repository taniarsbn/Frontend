import React, { useState, useEffect } from 'react';

const SimulasiKredit = () => {
  const [formData, setFormData] = useState({
    jenisKredit: '',
    jumlahPinjaman: '',
    jangkaWaktu: '1', // default jangka waktu adalah 1 bulan
    sukuBunga: '1', // suku bunga tetap 1%
  });

  // Mengubah nilai suku bunga secara otomatis jika diperlukan
  useEffect(() => {
    if (formData.jenisKredit) {
      // Tidak perlu melakukan perubahan, suku bunga sudah ditetapkan 1% secara global
    }
  }, [formData.jenisKredit]);

  // Fungsi untuk menghandle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validasi jumlah pinjaman agar tidak kurang dari 5 juta
    if (name === 'jumlahPinjaman' && value < 5000000) {
      alert('Jumlah pinjaman minimum adalah 5 juta!');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Simulasi Kredit</h1>

      <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={(e) => e.preventDefault()}>
        {/* Jenis Kredit */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Jenis Kredit</label>
          <select
            name="jenisKredit"
            value={formData.jenisKredit}
            onChange={handleChange}
            className="input w-full"
            required
          >
            <option value="">Pilih Jenis Kredit</option>
            <option value="Modal Kerja">Modal Kerja</option>
            <option value="Konsumtif">Konsumtif</option>
            <option value="Investasi">Investasi</option>
          </select>
        </div>

        {/* Jumlah Pinjaman */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Jumlah Pinjaman</label>
          <input
            type="number"
            name="jumlahPinjaman"
            value={formData.jumlahPinjaman}
            onChange={handleChange}
            placeholder="Masukkan Jumlah Pinjaman (Min 5 juta)"
            className="input w-full"
            min="5000000"
            required
          />
        </div>

        {/* Jangka Waktu */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Jangka Waktu (Bulan)</label>
          <select
            name="jangkaWaktu"
            value={formData.jangkaWaktu}
            onChange={handleChange}
            className="input w-full"
            required
          >
            <option value="1">1 Bulan</option>
            <option value="3">3 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="12">12 Bulan</option>
            <option value="24">24 Bulan</option>
            <option value="36">36 Bulan</option>
            <option value="48">48 Bulan</option>
            <option value="60">60 Bulan</option>
            <option value="72">72 Bulan</option>
            <option value="84">84 Bulan</option>
            <option value="96">96 Bulan</option>
            <option value="120">120 Bulan</option>
          </select>
        </div>

        {/* Suku Bunga */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Suku Bunga (%)</label>
          <input
            type="number"
            name="sukuBunga"
            value={formData.sukuBunga}
            onChange={handleChange}
            placeholder="Suku Bunga (%)"
            className="input w-full"
            disabled // Disabled karena suku bunga tetap 1%
          />
        </div>

        {/* Tampilkan Data yang Diinput */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Data yang Dimasukkan</h3>
          <p className="text-gray-700"><strong>Jenis Kredit:</strong> {formData.jenisKredit}</p>
          <p className="text-gray-700"><strong>Jumlah Pinjaman:</strong> Rp {formData.jumlahPinjaman}</p>
          <p className="text-gray-700"><strong>Jangka Waktu:</strong> {formData.jangkaWaktu} bulan</p>
          <p className="text-gray-700"><strong>Suku Bunga:</strong> {formData.sukuBunga}%</p>
        </div>
      </form>
    </div>
  );
};

export default SimulasiKredit;