import PanelLayout from "@/components/panelLayout";
import React from "react";

export default function Reservations() {
  return <div>Reservations</div>;
}

Reservations.getLayout = function getLayout(page) {
  return <PanelLayout>{page}</PanelLayout>;
};
