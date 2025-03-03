import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { ManageDepartmentCard } from "../../components/ManageDepartment";
import { DashboardSidebar } from "../../components/DashboardSidbar";

export const Dashboard = () => {
  const [isSidebarLoaded, setIsSidebarLoaded] = useState(false);

  return (
    <Box className="flex w-full">
      {/* Sidebar should always be rendered */}
      <DashboardSidebar onLoaded={setIsSidebarLoaded} />

      {/* Keep the right section empty until sidebar loads */}
      <Box className="flex-1 p-6 ">
        {!isSidebarLoaded ? (
          <Box className="flex justify-center items-center h-full">
            <CircularProgress />
          </Box>
        ) : (
          <ManageDepartmentCard />
        )}
      </Box>
    </Box>
  );
};
