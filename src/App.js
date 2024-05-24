import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./styles/style.css";
import Animation from "./Animation";
import Grade from "./Grade";
import SCW from "./SCW";
function App() {
  const [handleMenuClick, sethandleMenuClick] = useState("HOME");
  return (
    <div className="App">
      <Animation />

      <Header onMenuClick={sethandleMenuClick} />
      <main className="Main">
        {handleMenuClick === "HOME" ? (
          <Grade />
        ) : handleMenuClick === "GRADE" ? (
          <Grade />
        ) : handleMenuClick === "SCW" ? (
          <SCW />
        ) : null}
      </main>
    </div>
  );
}

export default App;
