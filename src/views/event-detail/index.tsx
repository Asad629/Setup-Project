import CardBar from "@/components/custom/CardBar";
import { DataTableDemo } from "@/components/custom/DataTable";
import { ChartComponent } from "@/components/custom/LineChart";
import LocationCard from "@/components/custom/LocationCard";
import { RadialChart } from "@/components/custom/RadialChart";

const EventDetail = () => {
  return (
    <div>
      <div className="p-8 w-full">
        <LocationCard />
        <CardBar />
        <div className="flex items-center gap-4 mt-4 lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          <ChartComponent />
          <RadialChart />
        </div>
        <DataTableDemo />
      </div>
    </div>
  );
};

export default EventDetail;
