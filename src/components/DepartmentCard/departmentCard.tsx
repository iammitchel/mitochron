import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface DepartmentCardProps {
  name: string;
  description: string;
  departmentCount: number;
  unitCount: number;
  avatar: string;
  bgColor: string;
  textColor?: string;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  name,
  description,
  departmentCount,
  unitCount,
  avatar,
  bgColor,
  textColor,
}) => {
  return (
    <Box
      className="p-4 rounded-lg shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <Typography
        variant="body2"
        className="rounded-md p-3"
        style={{ backgroundColor: textColor }}
      >
        {description}
      </Typography>
      <Box className="flex justify-between items-center mt-4">
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">
            {departmentCount} Department • {unitCount} Unit
          </Typography>
        </Box>
        <Avatar src={avatar} />
      </Box>
    </Box>
  );
};
