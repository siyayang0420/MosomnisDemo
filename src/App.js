import { useState } from "react";
import "./App.css";
import Navy1ButtonJacket from "./images/navy_stripe_puire_wool_s130_a407/1button/1_jacket/lightlyPadded.png";
import Navy1ButtonNotch from "./images/navy_stripe_puire_wool_s130_a407/1button/4_lapel/notch.png";
import Navy1ButtonPeak from "./images/navy_stripe_puire_wool_s130_a407/1button/4_lapel/peak.png";
import Navy3ButtonJacket from "./images/navy_stripe_puire_wool_s130_a407/3button/1_jacket/lightlyPadded.webp";
import Navy3ButtonNotch from "./images/navy_stripe_puire_wool_s130_a407/3button/4_lapel/notch.webp";
import Navy3ButtonPeak from "./images/navy_stripe_puire_wool_s130_a407/3button/4_lapel/peak.webp";
import Navy6ButtonJacket from "./images/navy_stripe_puire_wool_s130_a407/6button/1_jacket/lightlyPadded.webp";
import Navy6ButtonPeak from "./images/navy_stripe_puire_wool_s130_a407/6button/4_lapel/peak.webp";

function App() {
  const [changeJacket, setChangeJacket] = useState(Navy1ButtonJacket);
  const [changeLapel, setChangeLapel] = useState(Navy1ButtonNotch);

  function handleChangeJacket(v) {
    if (v === Navy1ButtonJacket) {
      setChangeLapel(Navy1ButtonNotch);
      setChangeJacket(Navy1ButtonJacket);
    } else if (v === Navy3ButtonJacket) {
      setChangeJacket(Navy3ButtonJacket);
      setChangeLapel(Navy3ButtonNotch);
    } else {
      setChangeJacket(Navy6ButtonJacket);
      setChangeLapel(Navy6ButtonPeak);
    }
  }

  function handleChangeLapel(v) {
    setChangeLapel(v);
  }
  return (
    <div className="App">
      <div style={{ width: "auto", height: 800, display:"flex", justifyContent:'center', alignItems:'center' }}>
        <img
          alt="jacket"
          width="auto"
          height="800"
          style={{ position: "absolute"}}
          src={changeJacket}
        ></img>
        {changeLapel === Navy1ButtonNotch && (
          <img
            alt="jacket"
            width="auto"
            height="800"
            style={{ position: "absolute"}}
            src={Navy1ButtonJacket}
          ></img>
        )}
        {changeJacket === Navy1ButtonJacket && (
          <img
            alt="notch"
            width="auto"
            height="800"
            style={{ position: "absolute"}}
            src={changeLapel}
          ></img>
        )}
        <img
          alt="notch"
          width="auto"
          height="800"
          style={{ position: "absolute"}}
          src={changeLapel}
        ></img>
        {changeJacket === Navy6ButtonJacket && (
          <img
            alt="notch"
            width="auto"
            height="800"
            style={{ position: "absolute" }}
            src={changeLapel}
          ></img>
        )}
      </div>

      <div style={{ flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <span>Model</span>
          <div className="optionCtn">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 400,
              }}
            >
              <button
                className="btnStyle"
                onClick={() => handleChangeJacket(Navy1ButtonJacket)}
              >
                1 Button
              </button>
              <button
                className="btnStyle"
                onClick={() => handleChangeJacket(Navy3ButtonJacket)}
              >
                3 Button
              </button>
              <button
                className="btnStyle"
                onClick={() => handleChangeJacket(Navy6ButtonJacket)}
              >
                6 Button
              </button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <span>Lapel</span>
          <div className="optionCtn">
            {changeJacket === Navy1ButtonJacket && (
              <div className="btnRoll">
                <button
                  onClick={() => handleChangeLapel(Navy1ButtonNotch)}
                  className="btnStyle"
                >
                  Notch
                </button>
                <button
                  onClick={() => handleChangeLapel(Navy1ButtonPeak)}
                  className="btnStyle"
                >
                  Peak
                </button>
              </div>
            )}
            {changeJacket === Navy3ButtonJacket && (
              <div className="btnRoll">
                <button
                  onClick={() => handleChangeLapel(Navy3ButtonNotch)}
                  className="btnStyle"
                >
                  Notch
                </button>
                <button
                  onClick={() => handleChangeLapel(Navy3ButtonPeak)}
                  className="btnStyle"
                >
                  Peak
                </button>
              </div>
            )}
            {changeJacket === Navy6ButtonJacket && (
              <div className="btnRoll">
                {/* <button
                  onClick={() => handleChangeLapel(Navy3ButtonNotch)}
                  className="btnStyle"
                >
                  Notch
                </button> */}
                <button
                  onClick={() => handleChangeLapel(Navy6ButtonPeak)}
                  className="btnStyle"
                >
                  Peak
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
