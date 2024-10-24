import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Toolbar } from "@mui/material";
import { Create, DarkMode , Home, LightMode, Person2, Settings } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

export default function Drawerr({drawerWidth , setMode , noneOrBlock , setNoneOrBlock , drawerType , setDrawerType}) {
    const navigate = useNavigate();
    const theme = useTheme();
    const location = useLocation();

    const handleMode = () => {
        if (theme.palette.mode === "light") {
            setMode("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setMode("light");
            localStorage.setItem("theme", "light");
        }
    };

    const myList = [
      { text: "Home", icon: <Home />, path: "/" },
      { text: "Create", icon: <Create />, path: "/create" },
      { text: "Profile", icon: <Person2 />, path: "/profile" },
      { text: "Settings", icon: <Settings />, path: "/settings" },
    ];

  return (
    <Drawer
        sx={{
          display: { xs: noneOrBlock, sm: 'block' },
          width:  drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          setNoneOrBlock("none");
          setDrawerType("permanent");
        }}
      >
        <Toolbar >
        <IconButton sx={{ mx: "auto" }} onClick={handleMode} aria-label="fingerprint" color="success">
            {theme.palette.mode === "light" ? <DarkMode sx={{  color: "black" }}/> : <LightMode sx={{  color: "orange" }}/>}
        </IconButton>
        </Toolbar>
        <Divider />
        <List>

        {myList.map((item) => {
          return (
            <ListItem 
              key={item.text}
              sx={{
                bgcolor:
                  location.pathname === item.path
                    ? // @ts-ignore
                      theme.palette.favColor.main
                    : null,
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}

      
            {/* <ListItem sx={{ bgcolor: location.pathname === "/" ? theme.palette.favColor.main : null }} disablePadding>
              <ListItemButton   onClick={() => {
              navigate("/");
            }}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText  >Home</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem sx={{ bgcolor: location.pathname === "/create" ? theme.palette.favColor.main : null }} disablePadding>
              <ListItemButton  onClick={() => {
              navigate("/create");
            }}>
                <ListItemIcon>
                  <Create />
                </ListItemIcon>
                <ListItemText  >Create</ListItemText>
              </ListItemButton>
            </ListItem> */}
       
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
  )
}
