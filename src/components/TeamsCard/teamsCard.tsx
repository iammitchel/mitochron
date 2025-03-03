import { Badge, Box, Button, Typography } from "@mui/material";
import React from "react";
import Upgrade from "../../assets/svgs/upgrade.svg?react";
import Department from "../../assets/svgs/source_environment.svg?react";
import Unit from "../../assets/svgs/communities.svg?react";

interface TeamsCardProps {
  departmentAmount?: number;
  unitAmount?: number;
  buttonText?: string;
  className?: string;
}

export const TeamsCard: React.FC<TeamsCardProps> = ({
  departmentAmount,
  unitAmount,
  buttonText = "Upgrade your plan",
  className,
}) => {
  return (
    <Box
      className={`border-2 !border-[#C0C9C0] rounded-2xl p-4 w-72 h-60 flex flex-col gap-5 ${className}`}
    >
      <Box className="flex justify-between">
        <Typography className="!text-lg !font-semibold">TEAMS</Typography>
        <Box className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
          Basic User
        </Box>
      </Box>

      <Box className="flex justify-between">
        <Typography color="textSecondary" className="flex items-center gap-2">
          <Department className=" h-5 w-5" /> Departments
        </Typography>
        <Typography color="textSecondary">{departmentAmount ?? 0}</Typography>
      </Box>

      <Box className="flex justify-between">
        <Typography color="textSecondary" className="flex items-center gap-2">
          {" "}
          <Unit className=" h-5 w-5" />
          Units
        </Typography>
        <Typography color="textSecondary">{unitAmount ?? 0}</Typography>
      </Box>

      <Button
        variant="outlined"
        className="!text-black !border-[#C0C9C0] !p-2"
        startIcon={<Upgrade className=" h-5 w-5" />}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
