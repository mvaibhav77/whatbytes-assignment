import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { skills } from "@/lib/constants";
import { Skill } from "@/lib/types";

const SyllabusAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="skill-progess flex flex-col gap-6 ">
          {skills.map(({ name, progress, color }: Skill, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="skill-heading font-thin">{name}</div>

              {/* progress bar */}
              <div className="flex flex-row gap-5 items-center text-blue-500">
                <Progress
                  value={progress}
                  className="w-full h-[12px]"
                  indicatorColor={color}
                />

                <p
                  className={`text-xl whitespace-nowrap`}
                  style={{ color: color }}
                >
                  {progress} %
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SyllabusAnalysis;
