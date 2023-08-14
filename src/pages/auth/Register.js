import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Register to Chat Tree</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Registered User?</Typography>
          <Link to="/auth/login/" component={RouterLink} variant="subtitle2">
            Login?
          </Link>
        </Stack>
        {/* Login Form */}
        <RegisterForm />
        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
