import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PaginationComponent from "./PaginationComponent";
import Scroll from "./Scroll";
import MainLayout from "./components/main-layout";
import Categorys from "./components/cotegorys";

function App() {
  return (
    <div>
      {/* <PaginationComponent/> */}
      {/* <Scroll/> */}
      <MainLayout>
        <Categorys>
          <Scroll/>
        </Categorys>
      </MainLayout>
    </div>
  );
}

export default App;
