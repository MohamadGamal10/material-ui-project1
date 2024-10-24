import React from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../layouts/Appbar";
import Drawerr from "../layouts/Drawerr";
import { Box, createTheme } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

export default function Root() {
    
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  const [noneOrBlock , setNoneOrBlock] = useState("none");
  const [drawerType , setDrawerType] = useState("permanent");

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //     ali: {
  //       main: "#f44336",
  //     },
  //   },
  // });

  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ali: {
              main: "#64748B",
            },

            favColor: {
              main: grey[300]
            }
          }
        : {
            // palette values for dark mode
            ali: {
              main: "#008080",
            },

            favColor: {
              main: grey[800]
            }
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
           <CssBaseline />
      <div>
        <Appbar setDrawerType={setDrawerType} setNoneOrBlock={setNoneOrBlock} />
        <Drawerr {...{ drawerWidth, setMode, noneOrBlock, setNoneOrBlock, drawerType, setDrawerType }} />

        <Box
          component={"main"}
          sx={{
            ml:{ sm: "240px" },
            width: { xs: "100%" , sm: "calc(100% - 240px)"  },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
}
