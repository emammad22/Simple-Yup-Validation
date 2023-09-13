import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/addErrorIntoField";
import { ErrorMessage } from "./ErrorMessage";

export const SelectFields = ({ name, label, control, errors }) => {
  const [listCountry, setListCountry] = useState([]);
  const countryNames = listCountry.map((item) => item?.name.common).sort();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setListCountry(data));
  }, []);

  return (
    <FormControl fullWidth sx={{ mb: "1rem" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              {...addErrorIntoField(errors[name])}
              label={label}
              variant="filled"
              select
            >
              <MenuItem>None</MenuItem>
              {countryNames.map((country, index) => {
                return (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                );
              })}
            </TextField>
          );
        }}
      />
      {errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
    </FormControl>
  );
};
