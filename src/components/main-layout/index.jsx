import React, { Children } from "react";
import Header from "../heard";
import Footerr from "../foter";

function MainLayout({ children }) {
  return (
    <div>
      <Header />

      {children}

      <Footerr />
    </div>
  );
}

export default MainLayout;
