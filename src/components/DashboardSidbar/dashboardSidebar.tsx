import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { fetchDashboardData } from "../../services/dashboardService";
import { ProfileCard } from "../ProfileCard";
import { TeamsCard } from "../TeamsCard";
import { LinksCard } from "../LinksCard";

interface DashboardSidebarProps {
  onLoaded: (success: boolean) => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  onLoaded,
}) => {
  const [dashboardData, setDashboardData] = useState<
    {
      id: number;
      name: string;
      email: string;
      address: string;
      departmentAmount: number;
      unitAmount: number;
      avatar: string;
    }[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData()
      .then((data) => {
        setDashboardData(data);
        setLoading(false);
        onLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        onLoaded(false);
      });
  }, [onLoaded]);

  if (loading) {
    return (
      <Box className="w-[25%] flex justify-center items-center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="w-[25%] p-6 border-r flex flex-col items-center justify-center">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box className=" border-r ">
      <Box>
        <Box className="flex flex-col p-6 gap-6">
          {dashboardData.map((user) => (
            <ProfileCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              buttonText="Set up your account"
              avatar={user.avatar}
            />
          ))}
          {dashboardData.map((user) => (
            <TeamsCard
              key={user.id}
              departmentAmount={user.departmentAmount}
              unitAmount={user.unitAmount}
            />
          ))}
          <LinksCard />
        </Box>
      </Box>
      <Typography className=" !mt-10 border-t p-4">
        Terms of Service · Privacy Policy
      </Typography>
    </Box>
  );
};
