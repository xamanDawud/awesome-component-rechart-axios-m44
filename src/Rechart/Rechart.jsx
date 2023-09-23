import React from "react";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const Rechart = () => {
  const subjectMarks = [
    { subject_name: "Mathematics", marks: 95 },
    { subject_name: "Science", marks: 88 },
    { subject_name: "History", marks: 75 },
    { subject_name: "English", marks: 32 },
  ];

  return (
    <div>
      {
        <LineChart width={400} height={400} data={subjectMarks}>
          <Line type="monotone" dataKey="marks" stroke="#8884d8" />
          <XAxis dataKey="subject_name" />
          <YAxis />
        </LineChart>
      }
    </div>
  );
};

export default Rechart;
