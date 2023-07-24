import React from "react";
import Chats from "./Chats";
import { Stack, Box, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats Component */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#FFF"
              : theme.palette.background.default,
        }}>
        {/* Conversation Chat Component */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
