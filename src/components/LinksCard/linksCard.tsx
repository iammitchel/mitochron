import { Badge, Box, Button, Typography } from "@mui/material";
import React from "react";
import LinkIcon from "../../assets/svgs/captive_portal.svg?react";

interface LinksCardProps {
  buttonText?: string;
  className?: string;
}

export const LinksCard: React.FC<LinksCardProps> = ({
  buttonText = "Upgrade your plan",
  className,
}) => {
  return (
    <Box
      className={`border-2 !border-[#C0C9C0] rounded-2xl p-4 w-72 h-32 flex flex-col gap-5 ${className}`}
    >
      <Typography className="!text-lg !font-semibold">LINKS</Typography>
      <Button
        variant="outlined"
        className="!text-black !border-[#C0C9C0] !p-2"
        startIcon={<LinkIcon className=" h-5 w-5" />}
      >
        {buttonText}
      </Button>
    </Box>
  );
};
