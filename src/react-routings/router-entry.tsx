import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import SideBar from "./SideBar";
import ErrorLanding from "./error-boundires/ErrorLanding";
import { GaurdLanding } from "./gaurds/GaurdLanding";

export const RouterEntry = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="error-boundaries" element={<ErrorLanding />} />
            <Route path="/gaurd-landing" element={<GaurdLanding />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
