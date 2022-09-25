import React, { useState } from "react";

function App() {
  const [luasTanah, setluasTanah] = useState("");
  const [luasbangunan, setluasbangunan] = useState("");
  const [njopTanah, setnjopTanah] = useState("");
  const [njopBangunan, setnjopBangunan] = useState("");
  const [pajak, setpajak] = useState(0);

  const total = (value1, value2, value3, value4) => {
    const hargatanah = value1 * value3;
    const hargabagunan = value2 * value4;
    const pbb = hargatanah + hargabagunan - 12000000;
    const pbb1 = (pbb * 20) / 100;
    const pbb2 = (pbb1 * 5) / 100;
    const hasil = pbb2 - 15000;

    return hasil;
  };

  function buttonproses(e) {
    e.preventDefault();

    setpajak(total(luasTanah, luasbangunan, njopTanah, njopBangunan));
  }

  return (
    <div className="container p-5 mb-5">
      <div className="shadow-sm  ">
        <div className="card mb-3">
          <div className="card-header">
            <h1>PBB Kalkulator</h1>
            <h5 className="card-title">Perhitungan Pajak Bumi Dan Bangunan</h5>
          </div>
          <div className="card-body">
            <div className="card-text ">
              <h6>Luas Tanah </h6>
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Luas Tanah"
              name="LuasTanah"
              onChange={(e) => setluasTanah(e.target.value)} //mengambil data dari value luastanah
            ></input>

            <div className="card-text ">
              <h6>Luas Bangunan</h6>
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Luas Bangunan"
              name="LuasBangunan"
              onChange={(e) => setluasbangunan(e.target.value)}
            ></input>

            <div className="card-text ">
              <h6>NJOP Tanah</h6>
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="NJOP Tanah"
              name="NjopTanah"
              onChange={(e) => setnjopTanah(e.target.value)}
            ></input>

            <div className="card-text ">
              <h6>NJOP Bangunan</h6>
            </div>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="NJOP Bangunan"
              name="NjopBangunan"
              onChange={(e) => setnjopBangunan(e.target.value)}
            ></input>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end  mb-4">
            <button
              className="btn btn-primary me-md-3"
              type="button"
              onClick={buttonproses}
            >
              Hitung
            </button>
          </div>
          {/* statment ? (do something if true) : ( do something if false) */}
          {pajak > 0 ? (
            <div className="container p-5 mb-5">
              <div className="alert alert-success " role="alert">
                Besaran PBB perhaun adalah:Rp. {pajak} ,-
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
