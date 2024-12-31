import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import SideBar from "./SideBar";
import ErrorLanding from "./error-boundires/ErrorLanding";
import { GaurdLanding } from "./gaurds/GaurdLanding";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { LazyLanding } from "./lazy-loading/LazyLanding";
import React, { Suspense } from "react";
import LazyDump from "./lazy-loading/LazyLoaded";

const LoadLazyComponent = React.lazy(() => import("./lazy-loading/LazyLoaded"));

export const RouterEntry = () => {
  const { token } = useLocalStorage();

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            {token && (
              <>
                <Route path="error-boundaries" element={<ErrorLanding />} />
                <Route path="/gaurd-landing" element={<GaurdLanding />} />
                <Route path="/lazy-loading" element={<LazyLanding />}>
                  <Route path="/lazy-loading" element={<LazyDump>0</LazyDump>}></Route>
                  <Route
                    path="/lazy-loading/link1"
                    element={
                      <LoadLazyComponent>1</LoadLazyComponent>
                    }
                  ></Route>
                  <Route
                    path="/lazy-loading/link2"
                    element={
                      <LoadLazyComponent>2</LoadLazyComponent>
                    }
                  ></Route>
                  <Route
                    path="/lazy-loading/link3"
                    element={
                      <LoadLazyComponent>3</LoadLazyComponent>
                    }
                  ></Route>
                  <Route path="*" element={<div>Not Found</div>}></Route>
                </Route>

              </>
            )}

          </Routes>

          <Outlet />

        </div>
      </div>
    </BrowserRouter>
  );
};
