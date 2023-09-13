import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TextFields from "../components/TextFields";
import { SelectFields } from "../components/SelectFields";
import { CheckboxFields } from "../components/CheckboxFields";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, phoneRegExp } from "../utils/addErrorIntoField";

// create schema for validation in yup
const schema = yup.object({
  fullname: yup.string().required("Fullname is required"),
  email: yup.string().required("Mail is required").email(),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(phoneRegExp, "Phone number is not valid"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      pawdRegExp,
      "Must contain 8 character, One uppercase, One Lowercase, one number and on special case character"
    ),
  passwordConfirmation: yup
    .string()
    .required("You must confirm it")
    .oneOf([yup.ref("password"), null], "Password must match"),
  privacy: yup.bool().oneOf([true], 'It must be checked')
});

function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      country: "",
      password: "",
      passwordConfirmation: "",
      privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "4rem",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main" }}
          variant="rounded"
          component="div"
        >
          <HowToRegIcon />
        </Avatar>
        <Typography component="h1">Sign Up</Typography>
        {/* Form Component */}
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(submit)}
          sx={{ width: "100%", mt: "2rem" }}
        >
          <TextFields
            name="fullname"
            label="Full Name"
            control={control}
            errors={errors}
          />
          <TextFields
            name="email"
            label="Email"
            control={control}
            errors={errors}
          />
          <TextFields
            name="phone"
            label="Phone Number"
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">+994</InputAdornment>
              ),
              type: "number",
            }}
            control={control}
            errors={errors}
          />
          <SelectFields name="country" label="Country" control={control} errors={errors} />
          <TextFields
            name="password"
            label="Password"
            control={control}
            errors={errors}
          />
          <TextFields
            name="passwordConfirmation"
            label="Confirm Password"
            control={control}
            errors={errors}
          />
          <CheckboxFields
            name="privacy"
            label="Are u agree with terms and privacy policy"
            control={control}
            errors={errors}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mb: 2,
              mt: 3,
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default RegisterForm;
