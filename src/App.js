import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepositoPage from "./Pages/DepositoPage";
import KreditPage from "./Pages/KreditPage";
import BerandaPage from "./Pages/BerandaPage";
import LoginPage from "./Pages/LoginPage";
import DasboardPage from "./Pages/DasboardPage";
import DepositoSimulasiPage from "./Pages/DepositoSimulasiPage";
import KreditSimulasiPage from "./Pages/KreditSimulasiPage";
import PengaduanPage from "./Pages/PengaduanPage";
import KontakAoPage from "./Pages/KontakAoPage";
import ChatAoPage from "./Pages/ChatAoPage";
import AjukanRekPage from "./Pages/AjukanRekPage";
import DaftarPage from "./Pages/DaftarPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< BerandaPage/>} />
          <Route path="/daftar" element={< DaftarPage/>} />
          <Route path="/deposito" element={< DepositoPage/>} />
          <Route path="/kredit" element={< KreditPage/>} />
          <Route path="/masuk" element={< LoginPage/>} />
          <Route path="/dasbor" element={< DasboardPage/>} />
          {/* //Admin */}
          <Route path="/deposito/simulasi" element={< DepositoSimulasiPage/>} />
          <Route path="/kredit/simulasi" element={< KreditSimulasiPage/>} />
          <Route path="/pengaduan" element={< PengaduanPage/>} />
          <Route path="/kontak-ao" element={< KontakAoPage/>} />
          {/* Chat AO */}
          <Route path="/chat-ao" element={< ChatAoPage/>} />
          {/* ajukan rek */}
          <Route path="/ajukan-rekstruktrurisasi" element={< AjukanRekPage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;