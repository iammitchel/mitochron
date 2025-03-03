import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Setup from "../../assets/svgs/page_info.svg?react";
import Mail from "../../assets/svgs/mail.svg?react";
import Address from "../../assets/svgs/language.svg?react";

interface ProfileCardProps {
  name?: string;
  email?: string;
  address?: string;
  buttonText?: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  email,
  address,
  buttonText,
  className,
}) => {
  return (
    <Box
      className={`border-2 !border-[#C0C9C0] rounded-2xl p-4 w-72 h-60 flex flex-col gap-5 ${className}`}
    >
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>
      <Typography color="textSecondary" className="flex items-center gap-2">
        <Mail className=" h-5 w-5" />
        {email}
      </Typography>
      <Typography color="textSecondary" className="flex items-center gap-2">
        <Address className=" h-5 w-5" />
        {address}
      </Typography>
      <Button
        variant="outlined"
        className="!text-black !border-[#C0C9C0] !p-2 flex items-center"
        startIcon={<Setup className=" h-5 w-5" />}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
