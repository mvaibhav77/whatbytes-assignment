"use client";

import React from "react";
import { ChartContainer } from "./ui/chart";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useFormContext } from "@/context/FormContext";
import { FaChartLine } from "react-icons/fa6";

const data = [
  { percentile: 0, numberOfStudents: 10 },
  { percentile: 10, numberOfStudents: 20 },
  { percentile: 20, numberOfStudents: 50 },
  { percentile: 30, numberOfStudents: 30 },
  { percentile: 40, numberOfStudents: 55 },
  {
    percentile: 50,
    numberOfStudents: 60,
  },
  { percentile: 60, numberOfStudents: 70 },
  { percentile: 70, numberOfStudents: 40 },
  {
    percentile: 80,
    numberOfStudents: 20,
  },
  {
    percentile: 90,
    numberOfStudents: 10,
  },
  {
    percentile: 100,
    numberOfStudents: 5,
  },
];

const ComparisonGraph = () => {
  const {
    state: { percentile },
  } = useFormContext();
  const chartConfig = {};

  // calculate avg percentile from data
  const avgPercentile =
    data.reduce((acc, curr) => acc + curr.percentile, 0) / data.length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="header flex flex-col gap-2">
          <CardTitle className="text-xl">Comparison Graph</CardTitle>
          <CardDescription>
            You scored {percentile} %tile which is{" "}
            {percentile > avgPercentile ? "higher" : "lower"} than the average
            percentile {avgPercentile} %tile of all the engineers who took the
            assessment.
          </CardDescription>
        </div>
        <FaChartLine className="text-4xl" />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="numberOfStudents" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <ReferenceLine
              x={Number(percentile)}
              stroke="gray"
              label="Your Percentile"
            />

            <XAxis dataKey="percentile" baseFrequency={25} />
            <Tooltip />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ComparisonGraph;
