import React from "react";

function header({ onMenuClick }) {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <button
              style={{ backgroundColor: "powderblue", cursor:"pointer",border:0}}
              onClick={() => onMenuClick("HOME")}
            >
              HOME
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: "powderblue", cursor:"pointer",border:0 }}
              onClick={() => onMenuClick("GRADE")}
            >
              GRADE
            </button>
          </li>
          <li>
            <button
              style={{ backgroundColor: "powderblue",  cursor:"pointer",border:0}}
              onClick={() => onMenuClick("SCW")}
            >
              Search City's Weather
            </button>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default header;
