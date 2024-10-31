import CardBar from "@/components/custom/CardBar";
import { DataTableDemo } from "@/components/custom/DataTable";
import { ChartComponent } from "@/components/custom/LineChart";
import { RadialChart } from "@/components/custom/RadialChart";
import React from "react";

const Home = () => {
  return (
    <div className="p-8 w-full">
      <h1 className="font-medium text-2xl">Welcome, Marci</h1>
      <p className="text-base font-normal text-zinc-500">
        Here is the information about all your events
      </p>
      <CardBar />
      <div className="flex items-center gap-4 mt-4 lg:flex-row md:flex-col sm:flex-col xs:flex-col">
        <ChartComponent />
        <RadialChart />
      </div>
      <DataTableDemo />
    </div>
  );
};

export default Home;
