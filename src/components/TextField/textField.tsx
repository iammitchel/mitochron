import { ChangeEvent, forwardRef, ReactNode } from "react";

import {
  BaseTextFieldProps,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField as MUITextField,
} from "@mui/material";

import classNames from "classnames";

// import './textField.css';
import React from "react";

export interface TextFieldProps extends BaseTextFieldProps {
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  errorText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isSearch?: boolean;
  readOnly?: boolean;
  labelOnTop?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  className?: string;
  labelClassName?: string;
  errorTextClassName?: string;
  inputClasses?: string;
  min?: number;
  max?: number;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      label,
      endIcon,
      startIcon,
      errorText,
      labelOnTop,
      isRounded,
      isLoading,
      isSuccess,
      readOnly,
      isSearch,
      isError,
      className,
      placeholder,
      labelClassName,
      inputClasses,
      errorTextClassName,
      min,
      max,
      variant = "outlined",
      ...props
    },
    ref,
  ) => {
    function endItem() {
      if (isLoading)
        return <CircularProgress size={18} thickness={8} disableShrink />;
      return endIcon || "";
    }

    return (
      <FormControl
        error={!!errorText}
        fullWidth={props.fullWidth === undefined ? true : props.fullWidth}
      >
        {labelOnTop && (
          <label
            className={classNames(
              "bd-text-field-label !font-[350]",
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        <MUITextField
          ref={ref}
          placeholder={placeholder}
          className={classNames(
            "!text-dark",
            { "bd-text-field": !isSearch },
            className,
          )}
          label={!labelOnTop ? label : undefined}
          variant={variant}
          InputLabelProps={{ ...props.InputLabelProps }}
          InputProps={{
            startAdornment: (startIcon || isSearch) && (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{endItem()}</InputAdornment>
            ),
            classes: {
              notchedOutline: classNames({
                "!border-none": isSearch,
              }),
            },
            className: classNames(
              " !text-dark",
              {
                "!rounded-full": isRounded,
                "!h-[52px]": !isSearch,
                "bg-white !rounded-full !h-[46px]": isSearch,
              },
              inputClasses,
            ),
            inputProps: {
              className: isSearch
                ? "!placeholder-dark !placeholder:font-light"
                : "",
              ...props.inputProps,
              min,
              max,
            },
            readOnly,
          }}
          {...props}
        />
        {errorText && (
          <FormHelperText
            className={classNames("relative -left-3", errorTextClassName)}
          >
            {errorText}
          </FormHelperText>
        )}
      </FormControl>
    );
  },
);

TextField.displayName = "TextField";
