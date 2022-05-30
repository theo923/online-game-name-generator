import React, { useState } from "react";
import {
  GiCrocSword,
  GiCrossedAxes,
  GiBroadsword,
  GiCrystalWand,
  GiCrossedSwords,
} from "react-icons/gi";

const Layout = () => {
  const [opt, setOpt] = useState<string>("english");
  console.log(opt);

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setOpt((_prev) => target.value);
  };

  return (
    <div data-test="component-layout">
      <h1 className="primary-text">
        <GiCrocSword size="50px" />
        Online Game Name Generator
        <GiCrossedAxes size="50px" />
      </h1>
      <div className="flexCenter" onChange={(e) => handleChange(e)}>
        <span className="radioBox">
          <div className="relative">
            <div className="absolute">
              <GiBroadsword
                color={opt === "english" ? "#40c36c" : "#000"}
                size="30px"
              />
            </div>
            <input
              className="radioBtn"
              checked={opt === "english"}
              name="lang"
              value="english"
              type="radio"
            />
          </div>
          <h2>English</h2>
        </span>
        <span className="radioBox">
          <div className="relative">
            <div className="absolute">
              <GiCrystalWand
                color={opt === "cantonese" ? "#40c36c" : "#000"}
                size="30px"
              />
            </div>
            <input
              className="radioBtn"
              checked={opt === "cantonese"}
              name="lang"
              value="cantonese"
              type="radio"
            />
          </div>
          <h2>Cantonese</h2>
        </span>
      </div>
      <button className="primary-btn">
        <div>
          <h2 style={{ marginRight: "10px" }}>
            <GiCrossedSwords size="20px" />
          </h2>
          <h2>Fight</h2>
        </div>
      </button>
    </div>
  );
};

export default Layout;
