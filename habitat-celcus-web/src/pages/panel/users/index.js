import PanelLayout from "@/components/panelLayout";
import React from "react";

export default function Users() {
  return <div>Users</div>;
}

Users.getLayout = function getLayout(page) {
  return <PanelLayout>{page}</PanelLayout>;
};
