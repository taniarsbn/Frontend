import React from 'react'

const Kredit = () => {
  return (
    <div>
      <section id="contact" className="px-6 my-15">
          <div className="contact">
            <h2 className="text-base my-18 text-center font-bold">Tabel Suku Bunga Kredit 2024</h2>
            <table className="min-w-full border-collapse border border-gray-200 table-auto">
              <thead>
                <tr>
                  <th className="border border-gray-300  bg-gray-200 p-2">Jenis Kredit</th>
                  <th className="border border-gray-300 bg-gray-200 p-2">Plafon</th>
                  <th className="border border-gray-300 bg-gray-200 p-2">Jangka Waktu (Bulan)</th>
                  <th className="border border-gray-300 bg-gray-200 p-2">Suku Bunga (p.a)</th>
                  <th className="border border-gray-300 bg-gray-200 p-2">Jenis Suku Bunga</th>
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
    </div>
  )
}

export default Kredit
