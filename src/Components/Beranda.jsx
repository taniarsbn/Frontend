import React from "react";
import background from "../img/background.jpg";
import logoojk from "../img/logoojk.png";
import logolps from "../img/logolps.png";
import logotelepon from "../img/logotelepon.png";
import logoinstagram from "../img/logoinstagram.png";
import logoemail from "../img/logoemail.png";
import logolokasi from "../img/logolokasi.png";

const Beranda = () => {
  return (
    <div className="">
      <div>
        <div
          className=""
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <img src={background} alt="" className="w-full"/>
      </div>
      <div className="mt-6 text-center text-xs text-gray-600">
        <p className="font-bold mt-10 text-2xl">
          SEBAGAI SOLUSI PERBANKAN ANDA  
        </p>
        <p className="mt-5 text-xl">
          <span className="font-bold">BPR ANP Cabang Merauke</span> berbagai produk finansial yang dirancang sesuai dengan kebutuhan Anda.
          Segera melangkah dan wujudkan impian dengan pinjaman cepat dan mudah serta simpanan aman dan menguntungkan dari <span className="font-bold">BPR ANP Cabang Merauke.</span>

        </p>
      </div>
      <footer className="px-6 py-12 bg-gray-100 text-xs text-black mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <img className="w-4" src={logotelepon} alt="Telepon" />
                <span className="text-base font-small">082199116191</span>
              </div>
              <div className="flex items-center space-x-2">
                <img className="w-4" src={logoinstagram} alt="Instagram" />
                <span className="text-base font-small">bank_anp</span>
              </div>
              <div className="flex items-center space-x-2">
                <img className="w-4" src={logoemail} alt="Email" />
                <span className="text-base font-small">
                  bpranpmerauke@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <img className="w-4" src={logolokasi} alt="Lokasi" />
                <span className="text-base font-small">
                  Jl. Raya Mandala Muli No. 90 Merauke
                </span>
              </div>
            </div>
            <p className="text-base mt-1 justify-center text-center">
              Bank Anak Negeri Papua berizin dan diawasi oleh
              <div className="flex justify-center items-center gap-4"> 
              <img className="w-20" src={logoojk} alt="OJK" /> 
              <img className="w-20" src={logolps} alt="LPS" />
              </div>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;
