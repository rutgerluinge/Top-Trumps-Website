import SmartLink from "./SmartLink";
import "../styling/header.css";

import React, { useState, useRef, useEffect } from "react";

export const Navigator = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  });

  return (
    <div id="navigator-id" ref={ref}>
      <nav className="nav-header">
        <h3 className="nav-title">Top-Trumps-Lamas</h3>
        <ul className="ul-header">
          <li className="li-header">
            <SmartLink href={"/"}>Home</SmartLink>
          </li>
          <li className="li-header">
            <SmartLink href={"/Top-Trumps-Website/game"}>Game</SmartLink>
          </li>
          <li className="li-header">
            <SmartLink href={"/Top-Trumps-Website/implementation"}>
              Implementation
            </SmartLink>
          </li>
          <li className="li-header">
            <SmartLink href={"/Top-Trumps-Website/play"}>Play</SmartLink>
          </li>
          <li className="li-header">
            <SmartLink href={"/Top-Trumps-Website/results"}>Results</SmartLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
