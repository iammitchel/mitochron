import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Card, Typography } from "@mui/material";
import { TextField } from "../TextField/textField";
import Flag from "../../assets/svgs/flag.svg?react";
import USAFlag from "../../assets/svgs/Flag_United_States.svg?react";

export const ConversionRate = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nigeriaRate: "100,000",
      unitedRateUnit: "60.8142",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated Data:", data);
  };

  return (
    <Box className="flex flex-col gap-4">
      <Card className=" !rounded-3xl border w-2xl h-72 flex flex-col gap-7">
        <Box className="border-b">
          <Typography className="!font-semibold mb-3 p-4 !text-xl">
            Conversion rate
          </Typography>
        </Box>
        <Box className="p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className="flex flex-col gap-8">
              <Controller
                name="nigeriaRate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="p-4 bg-[#EDEEEA]"
                    startIcon={
                      <div className="flex items-center gap-2">
                        <Flag className="h-5 w-5" />
                        <span>NGA</span>
                      </div>
                    }
                  />
                )}
              />
              <Controller
                name="unitedRateUnit"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="bg-[#EDEEEA]"
                    startIcon={
                      <div className="flex items-center gap-2">
                        <USAFlag className="h-5 w-5" />
                        <span>USA</span>
                      </div>
                    }
                  />
                )}
              />
            </Box>
          </form>
        </Box>
      </Card>
      <Typography className="p-10 !text-[#BA1A1A] rounded-3xl bg-[#FFDAD6]">
        You cannot change the Principal Currency once the financial year has
        commenced
      </Typography>
    </Box>
  );
};
