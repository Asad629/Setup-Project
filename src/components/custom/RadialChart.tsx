"use client";

import { Ellipsis } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import DotText from "../shared/Dottext";
import { chartConfig, chartData } from "@/constant";



export function RadialChart() {
  return (
    <Card className="flex flex-col md:w-full lg:w-auto sm:w-full xs:w-full">
      <CardHeader className="items-center pb-0 flex flex-row my-1 justify-between">
        <CardTitle className="font-medium text-xl">Earnings</CardTitle>
        <Ellipsis />
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-row gap-2 text-sm mt-10">
        <DotText text="Offline" bgColor="bg-blue-500" />
        <DotText text="Online" bgColor="bg-orange-500" />
        <DotText text="trade" bgColor="bg-blue-500" />
      </CardFooter>
    </Card>
  );
}
