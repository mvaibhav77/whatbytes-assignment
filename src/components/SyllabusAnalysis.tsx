import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

type Skill = {
  name: string;
  progress: number;
  color: string;
};

const skills: Skill[] = [
  { name: "HTML, Tools, Forms, History", progress: 80, color: "blue" },
  { name: "Tags & References in HTML", progress: 60, color: "orange" },
  { name: "CSS, Layout, Positioning, Flexbox", progress: 70, color: "red" },
  { name: "Tables,& References in HTML", progress: 24, color: "green" },
];

const SyllabusAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Syllabus Wise Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="skill-progess flex flex-col gap-6 ">
          {skills.map(({ name, progress, color }: Skill, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="skill-heading">{name}</div>

              {/* progress bar */}
              <div className="flex flex-row gap-5 items-center text-blue-500">
                <Progress
                  value={progress}
                  className="w-full h-[12px]"
                  indicatorColor={color}
                />

                <p className="text-xl whitespace-nowrap">{progress} %</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SyllabusAnalysis;
