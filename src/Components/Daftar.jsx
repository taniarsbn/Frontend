import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Daftar = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const Auth = async () => {
    try {
      await axios.post("http://localhost:5000/register", {
        username: Username,
        password: Password,
      });
      navigate("/masuk");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-[#FFF176] rounded-md shadow-md sm:px-6 md:px-8 lg:px-10">
          <div className="self-center text-xl font-medium text-gray-600 sm:text-2xl">
            BPR Connect
          </div>
          <div className="mt-10">
            <form onSubmit={Auth}>

              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                    placeholder="Nama Pengguna"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="relative">
                  <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                    <span>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                    placeholder="Kata Sandi"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full py-2 text-sm text-white transition duration-150 ease-in bg-[#2f77be] rounded focus:outline-none sm:text-base hover:bg-blue-700"
                >
                  <span className="mr-2">Daftar</span>
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              Sudah Punya Akun? <Link to={"/masuk"}>Masuk</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Daftar;
