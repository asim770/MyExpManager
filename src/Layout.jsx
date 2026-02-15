import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Particles from "./components/Particles/Particles";
export default function Layout() {
    return (
        <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <Header />

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
    );
}