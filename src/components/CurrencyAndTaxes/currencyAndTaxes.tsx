import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Card, Typography } from "@mui/material";
import { TextField } from "../TextField/textField";
import Flag from "../../assets/svgs/flag.svg?react";
import Create from "../../assets/svgs/contract.svg?react";

export const CurrencyAndTaxes = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      taxType: "Value Added Tax (VAT)",
      taxRate: "Fixed amount",
      taxRateUnit: "30.00",
      currency: "Naira",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated Data:", data);
  };

  return (
    <Card className=" !rounded-3xl border w-2xl flex flex-col gap-7">
      <Box className="border-b">
        <Typography className="!font-semibold mb-3 p-4 !text-xl">
          Currency
        </Typography>
      </Box>
      <Box className="flex items-center justify-between p-4">
        <Box className="flex items-center gap-2">
          <Typography className="!text-lg !font-semibold">
            Principal Currency
          </Typography>
        </Box>
        <Box className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
          Basic User
        </Box>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="flex flex-col gap-4 p-4">
          <Controller
            name="currency"
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
            name="taxType"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Tax type"
                labelOnTop
                className="bg-[#EDEEEA]"
              />
            )}
          />

          <Box className="grid grid-cols-2 gap-4 mt-3">
            <Controller
              name="taxRate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Tax rate"
                  labelOnTop
                  className="bg-[#EDEEEA]"
                />
              )}
            />
            <Controller
              name="taxRateUnit"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="bg-[#EDEEEA]"
                  label="Tax rate"
                  labelOnTop
                />
              )}
            />
          </Box>
        </Box>

        <Box className="mt-10 border-t w-full !p-4">
          <Button
            variant="outlined"
            className="!text-white !border-[#C0C9C0] !p-2 flex items-center !bg-[#00361D] w-full"
            startIcon={<Create className=" text-white !fill-white h-5 w-5" />}
          >
            Edit overview
          </Button>
        </Box>
      </form>
    </Card>
  );
};
