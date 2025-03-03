import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import VendPal from "../../assets/svgs/VendPal.svg?react";
import Explore from "../../assets/svgs/Explore.svg?react";
import Support from "../../assets/svgs/Support.svg?react";
import { menuItems } from "./header.constant";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const restrictedRoutes: Record<string, string> = {
    "/approval-workflow": "Approval Workflow is coming soon!",
    "/analytics": "Analytics feature is not available yet!",
  };

  const handleNavigation = (event: React.MouseEvent, path: string) => {
    if (restrictedRoutes[path]) {
      event.preventDefault(); 
      toast.warning(restrictedRoutes[path]);
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <Box className="flex justify-between p-8 bg-white border-b">
        <Box className="flex gap-10">
          <VendPal className="mt-3" />
          <Box className="flex gap-4 bg-[#EDEEEA] text-[#232628] px-4 py-1 rounded-2xl">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={index}
                  onClick={(event) => handleNavigation(event, item.path)}
                  className={`flex items-center space-x-2 py-2 px-4 rounded-lg transition ${
                    isActive ? "bg-white text-black shadow-sm !px-4" : "text-gray-600"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </Box>
        </Box>
        <Box className="flex gap-7">
          <Explore />
          <Support />
        </Box>
      </Box>
    </>
  );
};

