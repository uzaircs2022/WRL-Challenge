import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import "./Chart.css";


const Chart = ({userData:data}) => {
  return (
    <div className="graph-container">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
          <CartesianGrid strokeDasharray="1 1" stroke="#2C2C54" />
          <XAxis dataKey="date" stroke="#ffffff" dy={10}/>
          <YAxis stroke="#ffffff" dx={-10}/>
          <Tooltip />
          <Line type="linear" dataKey="users" stroke="#00e5ff" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;


