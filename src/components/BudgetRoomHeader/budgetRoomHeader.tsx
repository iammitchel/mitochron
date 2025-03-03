import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const tabs = [
  { label: "Currency and Taxes", key: "currency-taxes" },
  { label: "Budget line", key: "budget-line" },
  { label: "Budget room centre", key: "budget-room-centre" },
  { label: "Budget control", key: "budget-control" },
];

export const BudgetRoomHeader = () => {
  const [activeTab, setActiveTab] = useState("currency-taxes");

  return (
    <Box className="">
      <Box className="flex gap-6">
        {tabs.map((tab) => (
          <Box
            key={tab.key}
            className={`cursor-pointer pb-2 text-gray-600 ${
              activeTab === tab.key
                ? "font-semibold text-black border-b-2 border-black"
                : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            <Typography>{tab.label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
