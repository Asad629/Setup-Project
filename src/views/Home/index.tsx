import { DataTableDemo } from "@/components/custom/DataTable";
import React from "react";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="font-medium text-2xl">Welcome, Marci</h1>
      <p className="text-base font-normal text-zinc-500">
        Here is the information about all your events
      </p>
      <DataTableDemo />
    </div>
  );
};

export default Home;
