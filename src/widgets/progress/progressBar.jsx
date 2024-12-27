import React from "react";

const CircularProgress = ({ progress }) => {
  const radius = 50; 
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform rotate-[-90deg]"
      >
        <circle
          stroke="#e5e7eb" 
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#098d04" 
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-300"
        />
      </svg>
      <span className="absolute text-[#098d04] font-bold">
        {Math.round(progress)}%
      </span>
    </div>
  );
};

export default CircularProgress;
