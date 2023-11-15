import React from "react";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import Audit from "./components/Audit";
import { styles } from "./style";

const App = () => {
  return (
    <div className={`${styles.boxWidth} hidden md:block font-Roboto`}>
      <div className={`${styles.flexCenter}`}>
        <Navbar />
        <Setting />
        <Audit />
      </div>
    </div>
  );
};

export default App;
