import React from "react";

const TabelDeposito = () => {
  return (
    <div>
      <h1 className="text-base my-5 text-center font-bold">
        DAFTAR SUKU BUNGA BANK ANP 2024
      </h1>
      <section id="jenis-tabungan" className="px-6 mb-12 bg-white font-sans">
        <h2 className="text-center font-bold">Jenis Tabungan</h2>
        <table className="min-w-full border-collapse border border-gray-200 table-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-sm bg-gray-200 text-center">
                Jenis Tabungan
              </th>
              <th className="border border-gray-300 p-2 text-sm bg-gray-200 text-center">
                Suku Bunga
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">
                Tabumas ANP
              </td>
              <td className="border border-gray-300 p-2 text-sm text-center">
                1% P.A
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">
                Tapel ANP
              </td>
              <td className="border border-gray-300 p-2 text-sm text-center">
                1% P.A
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">
                Tabungan ABP
              </td>
              <td className="border border-gray-300 p-2 text-sm text-center">
                1% P.A
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-sm text-center">
                Tabungan ANP
              </td>
              <td className="border border-gray-300 p-2 text-sm text-center">
                2% P.A
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="flex justify-center">

      <table className="">
        <thead className="bg-gray-200">
          <th className="border border-gray-300 p-2 text-sm text-center">
            Deposito Nominal
          </th>
          <th className="border border-gray-300 p-2 text-sm text-center">
            Jangka Waktu
          </th>
          <th className="border border-gray-300 p-2 text-sm text-center">
            Suku Bunga
          </th>
          <table className="min-w-full border-collapse border border-gray-200 table-auto"></table>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-sm text-center">
              1. Kurang dari 100JT{" "}
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              1-12 Bulan
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              4,5% P.A
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-sm text-center">
              2. Lebih dari 100-500JT{" "}
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              1-12 Bulan
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              5% P.A
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-sm text-center">
              3. Lebih dari 500JT{" "}
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              1-12 Bulan
            </td>
            <td className="border border-gray-300 p-2 text-sm text-center">
              5,50% P.A 
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TabelDeposito;
