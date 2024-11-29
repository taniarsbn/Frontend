import React, { useState } from 'react';
import logotelepon from "../img/logotelepon.png";
import logoinstagram from "../img/logoinstagram.png";
import logoemail from "../img/logoemail.png";
import logolokasi from "../img/logolokasi.png";

const Home = () => {
  const [amount, setAmount] = useState(10000000); // Minimal 10 juta
  const [duration, setDuration] = useState(1); // Minimal 1 bulan
  const [interest, setInterest] = useState(1); // Minimal 1%
  const [result, setResult] = useState(''); // State untuk hasil perhitungan

  // Fungsi untuk menyinkronkan input dan range
  const syncInput = (type, value) => {
    if (type === 'amount') {
      setAmount(value);
    } else if (type === 'duration') {
      setDuration(value);
    } else if (type === 'interest') {
      setInterest(value);
    }
  };

  // Fungsi untuk menghitung deposito
  const calculateLoan = () => {
    // Logika perhitungan sederhana
    const total = amount + (amount * (interest / 100));
    const resultText = `Nominal: ${amount.toLocaleString()} Rupiah\nTenor: ${duration} bulan\nSuku Bunga: ${interest}%\nTotal Akhir: ${total.toLocaleString()} Rupiah`;
    setResult(resultText); // Menyimpan hasil perhitungan
  };

  return (
    <>
      <section id="home" className="px-6 py-12 bg-lightGray font-sans">
        <h1 className="text-4xl font-bold mb-6 text-center">BPR Anak Negeri Papua</h1>
        <p className="text-base mt-7 text-center">
          Bank Perekonomian Rakyat Anak Negeri Papua adalah lembaga keuangan lokal di Indonesia yang menyediakan layanan perbankan kepada masyarakat setempat.
        </p>
        <p className="text-base text-center">
          Fokus kami adalah mendukung individu dan usaha kecil dengan solusi finansial yang tepat.
        </p>

        <h2 className="text-base mt-20 text-3xl font-bold mb-6">Produk Kami</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 mr-4" src="path/to/founding-icon.png" alt="Founding Icon" />
              <h3 className="text-xl font-semibold">Founding</h3>
            </div>
            <p>
              Pendanaan untuk memulai atau mengembangkan usaha. Ideal untuk investasi awal dan modal operasional.
            </p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img className="w-12 h-12 mr-4" src="path/to/landing-icon.png" alt="Landing Icon" />
              <h3 className="text-xl font-semibold">Landing</h3>
            </div>
            <p>
              Kredit untuk kebutuhan pribadi atau usaha kecil, seperti pembelian atau renovasi, dengan syarat yang fleksibel.
            </p>
          </div>
        </div>
      </section>

      <section id="about-deposito" className="px-6 mb-12 font-sans">
        <section id="contact" className="px-6 mb-12 bg-gray-100">
          <div className="contact">
            <h2 className="text-base mt-20 text-center font-bold">Tabel Suku Bunga Kredit</h2>
            <table className="min-w-full border-collapse border border-gray-200 table-auto">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Jenis Kredit</th>
                  <th className="border border-gray-300 p-2">Plafon</th>
                  <th className="border border-gray-300 p-2">Jangka Waktu (Bulan)</th>
                  <th className="border border-gray-300 p-2">Suku Bunga (p.a)</th>
                  <th className="border border-gray-300 p-2">Jenis Suku Bunga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">5.000.000 - &lt; 25.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 48</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">24%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">flat to anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">25.000.000 - &lt; 50.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 36 &gt; 36 s.d 60</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">14% / 18% / 0.9%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">flat to anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">50.000.000 - &lt; 100.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 36 / &gt; 36 s.d 60 / &gt; 60 s.d 120</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">12% / 14% / 18%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">flat to anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">100.000.000 - &lt; 200.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 36 / &gt; 36 s.d 60 / &gt; 60 s.d 120</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">12% / 14% / 18%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">flat to anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">200.000.000 - &lt; 500.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 36 / &gt; 36 s.d 60 / &gt; 60 s.d 120</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">12% / 14% / 18%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja Konsumtif Investasi</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">&gt; 500.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 36 / &gt; 36 s.d 60 / &gt; 60 s.d 120</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">12% / 14% / 18%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Modal Kerja (Bridging Loan)</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">s.d maks. BMPK</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">s.d 12</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">24%</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">flat to anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Kredit Internal ANP</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">5.000.000 - 100.000.000</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 180</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">Sesuai LPS</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">anuitas</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2 text-sm">Kredit Internal ANP</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">&gt; 100.000.000 s.d maks. BMPK</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">6 s.d 180</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">Sesuai LPS</td>
                  <td className="border border-gray-300 p-2 text-sm text-center">anuitas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <section id="jenis-tabungan" className="px-6 mb-12 bg-gray-100 font-sans">
        <h2 className="text-center font-bold">Jenis Tabungan</h2>
        <table className="min-w-full border-collapse border border-gray-200 table-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-sm text-center">Jenis Tabungan</th>
              <th className="border border-gray-300 p-2 text-sm text-center">Suku Bunga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">Tabumas ANP</td>
              <td className="border border-gray-300 p-2 text-sm text-center">1% P.A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">Tapel ANP</td>
              <td className="border border-gray-300 p-2 text-sm text-center">1% P.A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">Tabungan ABP</td>
              <td className="border border-gray-300 p-2 text-sm text-center">1% P.A</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">Tabungan ANP</td>
              <td className="border border-gray-300 p-2 text-sm text-center">2% P.A</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="simulasi-deposito" className="px-6 mb-12 font-sans">
        <h2 className="text-base mt-40 text-center font-bold mb-8">Simulasi Deposito</h2>
        <form id="loanForm" className="space-y-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <label htmlFor="amount" className="block text-lg font-medium">
                Nominal Penempatan (Rupiah): <span id="amountValue" className="font-bold">{amount.toLocaleString()}</span>
              </label>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  id="amountInput"
                  name="amountInput"
                  min="10000000"
                  max="1000000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => syncInput('amount', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="range"
                  id="amount"
                  name="amount"
                  min="10000000"
                  max="1000000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => syncInput('amount', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="duration" className="block text-lg font-medium">
                Tenor (Bulan): <span id="durationValue" className="font-bold">{duration}</span>
              </label>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  id="durationInput"
                  name="durationInput"
                  min="1"
                  max="12"
                  step="1"
                  value={duration}
                  onChange={(e) => syncInput('duration', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="range"
                  id="duration"
                  name="duration"
                  min="1"
                  max="12"
                  step="1"
                  value={duration}
                  onChange={(e) => syncInput('duration', parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="interest" className="block text-lg font-medium">
                Suku Bunga (%): <span id="interestValue" className="font-bold">{interest}</span>
              </label>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  id="interestInput"
                  name="interestInput"
                  min="1"
                  max="10"
                  step="0.1"
                  value={interest}
                  onChange={(e) => syncInput('interest', parseFloat(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                <input
                  type="range"
                  id="interest"
                  name="interest"
                  min="1"
                  max="10"
                  step="0.1"
                  value={interest}
                  onChange={(e) => syncInput('interest', parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={calculateLoan}
            className="w-full p-4 bg-blue-600 text-white rounded"
          >
            Hitung
          </button>
        </form>

        <div className="result mt-6 p-4 border border-gray-300 rounded text-sm">
            {result}
          </div>
        <div className="mt-6 text-center text-xs text-gray-600">
            <p>Catatan: Perhitungan ini hanya sebagai alat bantu simulasi investasi dan tidak dimaksudkan untuk menyediakan rekomendasi apa pun.</p> 
            <p>Asumsi: 1 bulan = 30 hari, dan 1 tahun = 365 hari</p>
          </div>
      </section>
      <footer className="px-6 py-12 bg-gray-100 text-xs text-black">
  <div className="container mx-auto">
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <img className='w-4' src={logotelepon} alt="Telepon" />
          <span className="text-base font-small">082199116191</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className='w-4' src={logoinstagram} alt="Instagram" />
          <span className="text-base font-small">bank_anp</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className='w-4' src={logoemail} alt="Email" />
          <span className="text-base font-small">bpranpmerauke@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <img className='w-4' src={logolokasi} alt="Lokasi" />
          <span className="text-base font-small">Jl. Raya Mandala Muli No. 90 Merauke</span>
        </div>
      </div>
      <p className="text-base mt-1 text-center">
        Bank Anak Negeri Papua berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia
      </p>
      <p className="text-base mt-1 text-center">
        Bank ANP merupakan peserta penjaminan LPS
      </p>
    </div>
  </div>
</footer>
    </>
  );
};

export default Home;