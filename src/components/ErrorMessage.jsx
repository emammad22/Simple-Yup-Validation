import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          mt : '6px'
        }}
      >
        <ErrorIcon sx={{ color: "error.main" }} />
        <Typography sx={{ color: "error.main", fontSize: "14px" }}>
          {message}
        </Typography>
      </Box>
    </>
  );
};
