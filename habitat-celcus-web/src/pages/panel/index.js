import PanelLayout from "@/components/panelLayout";
import React from "react";

export default function Panel() {
  return (
    <div className="container">
      <h1> Panel Dashboard </h1>
    </div>
  );
}

Panel.getLayout = function getLayout(page) {
  return <PanelLayout>{page}</PanelLayout>;
};
