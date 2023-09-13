import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/addErrorIntoField";
import { ErrorMessage } from "./ErrorMessage";

export const CheckboxFields = ({ name, label, control, errors }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              {...field}
              {...addErrorIntoField(errors[name])}
              control={<Checkbox defaultChecked />}
              label={label}
            />
          );
        }}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </>
  );
};
