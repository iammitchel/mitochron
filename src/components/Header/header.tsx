import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./header.constant";
import { Box } from "@mui/material";
import VendPal from "../../assets/svgs/VendPal.svg?react";
import Explore from "../../assets/svgs/Explore.svg?react";
import Support from "../../assets/svgs/Support.svg?react";

export const Header: React.FC = () => {
  return (
    <Box className="flex justify-between p-8 bg-white border-b">
      <Box className="flex gap-10">
        <VendPal className="mt-3" />
        <Box className="flex gap-4 bg-[#EDEEEA] text-[#232628] px-4 py-1 rounded-2xl">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-2 px-4 rounded-lg transition ${
                  isActive
                    ? "bg-white text-black shadow-sm !px-4"
                    : "text-gray-600"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box className="flex gap-7">
        <Explore />
        <Support />
      </Box>
    </Box>
  );
};
