import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ForgotPasswordForm from "../../sections/auth/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Reset Your Password</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Already Registered</Typography>
          <Link to="/auth/login/" component={RouterLink} variant="subtitle2">
            Login?
          </Link>
        </Stack>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register/" component={RouterLink} variant="subtitle2">
            Create New User?
          </Link>
        </Stack>
        {/* Login Form */}
        <ForgotPasswordForm />
      </Stack>
    </>
  );
};

export default ForgotPassword;
