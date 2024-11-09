"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaTrophy } from "react-icons/fa6";
import { useFormContext } from "@/context/FormContext";
import { ImCheckboxChecked } from "react-icons/im";
import { IoNewspaper } from "react-icons/io5";
import { Separator } from "./ui/separator";

const QuickStatistics = () => {
  const {
    state: { rank, percentile, currentScore },
  } = useFormContext();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 justify-between">
        <div className="rank flex md:gap-8 gap-4 items-center">
          {/* image */}
          <div className="metric-icon flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 text-3xl text-yellow-500">
            <FaTrophy />
          </div>

          {/* metrics */}
          <div className="metric">
            <h5 className="text-3xl">{rank}</h5>
            <p className="text-sm text-slate-400">YOUR RANK</p>
          </div>
        </div>

        <Separator className="w-px h-100" orientation="vertical" />

        <div className="rank flex md:gap-8 gap-4 items-center">
          {/* image */}
          <div className="metric-icon flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 text-3xl text-blue-400">
            <IoNewspaper />
          </div>

          {/* metrics */}
          <div className="metric">
            <h5 className="text-3xl">{percentile}</h5>
            <p className="text-sm text-slate-400">YOUR PERCENTILE</p>
          </div>
        </div>

        <Separator className="w-px h-100" orientation="vertical" />

        <div className="rank flex md:gap-8 gap-4 items-center">
          {/* image */}
          <div className="metric-icon flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 text-3xl text-green-500">
            <ImCheckboxChecked />
          </div>

          {/* metrics */}
          <div className="metric">
            <h5 className="text-3xl">{currentScore}</h5>
            <p className="text-sm text-slate-400">YOUR RANK</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStatistics;
