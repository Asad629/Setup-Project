"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";
import DotText from "../shared/Dottext";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LineChartConfig, LineChartData } from "@/constant/constant";

export function ChartComponent() {
  return (
    <Card className="w-full h-[350px] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-xl">Events Analytics</h1>
          <div className="flex items-center gap-4">
            <DotText text="Offline Order" bgColor="bg-blue-500" />
            <DotText text="Online Order" bgColor="bg-orange-500" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Monthly <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="w-full h-full flex-1">
        <ChartContainer
          config={LineChartConfig}
          style={{ height: "80%", width: "100%" }}
        >
          <LineChart
            accessibilityLayer
            data={LineChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
