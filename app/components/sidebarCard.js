
import { Card } from "flowbite-react";
import Dropdown  from "./dropdown";
import "./sidebarCard.css";

export default function sidecard() {
  return (
        <Card
      theme={{
        root: {
          base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
          children: "flex h-full flex-col justify-center gap-4 p-0", // ⬅️ remove p-6 here
        },
      }}
      className="max-w-sm sidebar-card border-0 shadow-none"
    >
      <Dropdown />
    </Card>
  );
}
