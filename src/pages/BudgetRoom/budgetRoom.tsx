import React, { useState } from "react";
import { DashboardSidebar } from "../../components/DashboardSidbar";
import { Box, CircularProgress, Typography } from "@mui/material";
import { BudgetRoomHeader } from "../../components/BudgetRoomHeader/budgetRoomHeader";
import { CurrencyAndTaxes } from "../../components/CurrencyAndTaxes";
import { ConversionRate } from "../../components/ConversionRate/conversionRate";
import DateRangePicker from "../../components/DateRangePicker/dateRangePicker";

export const BudgetRoom = () => {
  const [isSidebarLoaded, setIsSidebarLoaded] = useState(false);

  return (
    <Box className="flex gap-5">
      {/* ✅ Sidebar is always rendered */}
      <DashboardSidebar onLoaded={setIsSidebarLoaded} />

      {/* ✅ Show loader in content area until sidebar loads */}
      <Box className="w-full mt-10 flex flex-col gap-6">
        {!isSidebarLoaded ? (
          <Box className="flex items-center justify-center h-screen">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <BudgetRoomHeader />
            <Box className="flex gap-7">
              <Typography className="!text-xl !font-semibold flex items-center">
                Financial year
              </Typography>
              <DateRangePicker />
            </Box>
            <Box className="flex gap-4">
              <CurrencyAndTaxes />
              <ConversionRate />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};
