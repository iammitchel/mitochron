import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Create from "../../assets/svgs/contract_edit.svg?react";

export const CreateDepartmentCard: React.FC<{ onCreate: () => void }> = ({
  onCreate,
}) => {
  return (
    <Box
      className="p-4 flex flex-col justify-center items-center rounded-lg shadow-md cursor-pointer bg-[#F3F4EF] gap-16"
      onClick={onCreate}
    >
      <Box className="flex justify-center items-center bg-[#004D40] rounded-[50%] w-[50px] h-[50px] mt-6">
        <Typography variant="h4" color="white">
          +
        </Typography>
      </Box>
      <Button
        variant="outlined"
        className="!text-black !border-[#C0C9C0] !p-2 flex items-center !bg-white"
        startIcon={<Create className=" h-5 w-5" />}
      >
        Create a department
      </Button>
    </Box>
  );
};
