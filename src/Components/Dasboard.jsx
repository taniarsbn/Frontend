import React from 'react'
import background from "../img/background.jpg";

const Dasboard = () => {
  return (
    <div>
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
    </div>
  )
}

export default Dasboard
