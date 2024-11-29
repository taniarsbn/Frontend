import React, { useState } from 'react';

const DepositoSimulasi = () => {
  const [amount, setAmount] = useState(10000000); // Minimal 10 juta
  const [duration, setDuration] = useState(1); // Minimal 1 bulan
  const [interest, setInterest] = useState(4.5); // Default interest rate
  const [result, setResult] = useState(''); // State untuk hasil perhitungan

  // Fungsi untuk menyinkronkan input dan range
  const syncInput = (type, value) => {
    if (type === 'amount') {
      setAmount(value);
      // Update interest rate based on the amount
      if (value < 100000000) {
        setInterest(4.5);
      } else if (value >= 100000000 && value <= 500000000) {
        setInterest(5.0);
      } else {
        setInterest(5.5);
      }
    } else if (type === 'duration') {
      setDuration(value);
    } else if (type === 'interest') {
      setInterest(value);
    }
  };

  // Fungsi untuk menghitung deposito
  const calculateLoan = () => {
    const total = amount + (amount * (interest / 100));
    const resultText = `Nominal: ${amount.toLocaleString()} Rupiah\nTenor: ${duration} bulan\nSuku Bunga: ${interest}%\nTotal Akhir: ${total.toLocaleString()} Rupiah`;
    setResult(resultText); // Menyimpan hasil perhitungan
  };

  return (
    <div>
      <section id="simulasi-deposito" className="px-6 font-sans">
        <h2 className="text-base mt-3 text-center font-bold mb-8">Simulasi Deposito</h2>
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
                <select
                  id="durationInput"
                  name="durationInput"
                  value={duration}
                  onChange={(e) => syncInput('duration', parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded"
                >
                  <option value={1}>1 Bulan</option>
                  <option value={3}>3 Bulan</option>
                  <option value={6}>6 Bulan</option>
                  <option value={12}>12 Bulan</option>
                </select>
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
                  readOnly
                  value={interest}
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">

          <button
            type="button"
            onClick={calculateLoan}
            className=" p-4 px-20 bg-blue-600 text-white rounded-[50px]"
          >
            Hitung
          </button>
          </div>
        </form>

        <div className="result mt-6 p-4 border border-gray-300 rounded text-sm">
            {result}
        </div>
        <div className="mt-6 text-center text-xs text-gray-600">
            <p>Catatan: Perhitungan ini hanya sebagai alat bantu simulasi investasi dan tidak dimaksudkan untuk menyediakan rekomendasi apa pun.</p> 
            <p>Asumsi: 1 bulan = 30 hari, dan 1 tahun = 365 hari</p>
        </div>
      </section>
    </div>
  );
}

export default DepositoSimulasi;
