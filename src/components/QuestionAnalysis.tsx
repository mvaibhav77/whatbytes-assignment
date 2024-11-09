"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useFormContext } from "@/context/FormContext";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Label, Pie, PieChart } from "recharts";
import { PiTargetBold } from "react-icons/pi";

const QuestionAnalysis = () => {
  const {
    state: { currentScore },
  } = useFormContext();

  const chartConfig = {
    name: {
      label: "Name",
    },
    scored: {
      label: "Scored",
      color: "blue",
    },
    notScored: {
      label: "Not Scored",
      color: "gray",
    },
  } satisfies ChartConfig;
  const chartData = [
    {
      name: "Scored",
      value: Number(currentScore),
      fill: "var(--color-scored)",
    },
    {
      name: "NotScored",
      value: 15 - currentScore,
      fill: "var(--color-notScored)",
    },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-col text-lg gap-2">
        <div className="flex flex-row  items-center justify-between">
          <CardTitle>Question Analysis</CardTitle>
          <p className="text-blue-600">{currentScore}/15</p>
        </div>

        <CardDescription>
          You scored {currentScore} out of 15.{" "}
          {currentScore < 10
            ? "You need to work more hard."
            : currentScore < 14
            ? "However, it still needs some improvement."
            : "Great work!!"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <foreignObject
                        x={viewBox.cx ? viewBox.cx - 15 : 0}
                        y={viewBox.cy ? viewBox.cy - 15 : 0}
                        width="30"
                        height="30"
                      >
                        <div className="flex items-center justify-center text-red-600 text-4xl font-bold">
                          <PiTargetBold />
                        </div>
                      </foreignObject>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default QuestionAnalysis;
