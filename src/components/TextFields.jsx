import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/addErrorIntoField";
import { ErrorMessage } from "./ErrorMessage";

function TextFields({ name, label, inputProps, control, errors }) {
  return (
    <>
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                {...addErrorIntoField(errors[name])}
                required
                label={label}
                variant="filled"
                InputProps={inputProps}
              />
            );
          }}
        />
        {errors[name] ? <ErrorMessage message={errors[name].message}/> : null}
      </FormControl>
    </>
  );
}

export default TextFields;
