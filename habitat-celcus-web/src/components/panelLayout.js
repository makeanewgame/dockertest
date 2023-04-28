import React from "react";
import PanelMenu from "./panelMenu";

export default function PanelLayout({ children }) {
  return (
    <div className="flex">
      <div className="bg-gray-200 basis-1/5 min-h-screen">
        <PanelMenu />
      </div>
      <div className="basis-4/5">{children}</div>
    </div>
  );
}
