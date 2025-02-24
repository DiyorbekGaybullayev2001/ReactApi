import React, { useState } from "react";
// import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart/LineChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import { desktopOS, valueFormatter } from './webUsageStats.jsx';
import img1 from '../../imgs/adminimg.png'

const tasksByDay = {
  Sunday: [
    {
      title: "Send benefit review by Sunday",
      dueDate: "December 23, 2018",
      user: "George Fields",
      status: "Completed",
      tag: "Reminder",
      
    },
    {
      title: "Invite to office meet-up",
      dueDate: "December 23, 2019",
      user: "Rebecca Moore",
      status: "Ended",
      tag: "Call",
    },
    // {
    //   title: "Invite to office meet-up",
    //   dueDate: "December 23, 2020",
    //   user: "Rebecca Moore",
    //   status: "Ended",
    //   tag: "Call",
    // },
    {
      title: "Send benefit review by Sunday",
      dueDate: "December 23, 2010",
      user: "George Fields",
      status: "Completed",
      tag: "Reminder",
    },
    
    {
      title: "Office meet-up",
      dueDate: "December 23, 2018",
      user: "Lindsey Stroud",
      status: "Completed",
      tag: "Event",
    },
  ],
  Monday: [
    {
      title: "Project deadline",
      dueDate: "December 24, 2018",
      user: "Alice Johnson",
      status: "Pending",
      tag: "Work",
    },
    {
      title: "Team meeting",
      dueDate: "December 24, 2018",
      user: "John Doe",
      status: "Scheduled",
      tag: "Meeting",
    },
  ],
};

const weekDays = [
  { name: "Sunday", date: "23" },
  { name: "Monday", date: "24" },
  { name: "Tuesday", date: "25" },
  { name: "Wednesday", date: "26" },
  { name: "Thursday", date: "27" },
  { name: "Friday", date: "28" },
  { name: "Saturday", date: "29" },
];

function Dashboard() {
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [tasks, setTasks] = useState(tasksByDay[selectedDay]);
  const [showMore, setShowMore] = useState(false);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setTasks(tasksByDay[day] || []);
    setShowMore(false);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };
  
  return (
    <div className='pt-[90px] ml-5 flex'>

      <div className="w-[50%] ">
      <div className=" mx-auto p-4 bg-white shadow-md rounded-lg mt-[30px]">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 text-sm">8 task completed out of 10</span>
        <span className="text-blue-500 text-sm cursor-pointer">This week</span>
      </div>
      <div className="mt-2 bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-4/5"></div>
      </div>
      
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{selectedDay}</h2>
        <div className="flex space-x-2 mt-2">
          {weekDays.map(({ name, date }) => (
            <button
              key={name}
              onClick={() => handleDayClick(name)}
              className={`p-2 rounded-full w-20 text-sm flex flex-col items-center ${selectedDay === name ? "bg-blue-500 text-white" : "text-gray-700"}`}
            >
              <span>{name.substring(0, 3)}</span>
              <span className="text-xs">{date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {tasks.slice(0, showMore ? tasks.length : 3).map((task, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-100">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{task.title}</h3>
              <span className="text-sm text-blue-500">{task.tag}</span>
            </div>
            <p className="text-sm text-gray-500">Due date: {task.dueDate}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <img src={img1} alt="" className="h-[30px] w-[30px] rounded-full"/>
                <span className="text-sm text-gray-700 ml-[20px]">{task.user}</span>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${task.status === "Completed" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>{task.status}</span>
            </div>
          </div>
        ))}
      </div>

      {!showMore && tasks.length > 2 && (
        <div className="text-center mt-4">
          <button onClick={handleShowMore} className="text-blue-500">Show more</button>
        </div>
      )}
    </div>
      </div>

      <div className="mt-[30px] ml-[20px]">
        <div className="w-[100%] shadow-lg rounded-lg">
        <div className="flex justify-between p-[10px] font-serif">
            <p>Deals</p>
            <p>Show: <span className="text-blue-600">Monthly</span></p>
          </div>
          <LineChart
            xAxis={[{ data: [0, 50, 100, 150, 200, 300] }]}
            series={[
              {
                data: [2, 4, 2, 7, 1.5, 5],
                area: true,
              },
            ]}
            width={600}
            height={300}
          />
        </div>

        <div className="shadow-lg p-[10px] rounded-lg mt-[30px]">
        <div className="flex justify-between p-[10px] font-serif">
            <p>Tasks</p>
            <p>Show: <span className="text-blue-600">This month</span> </p>
          </div>
         <PieChart
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 35,
              arcLabelRadius: '60%',
              ...data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: 'bold',
            },
          }}
          {...size}
        />
        </div>
        
      </div>
      

    </div>
  )
}

export default Dashboard

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};
