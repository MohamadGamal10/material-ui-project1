import React from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Link, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material';


export default function Appbar({setNoneOrBlock , setDrawerType}) {
  return (
    <AppBar sx={{ ml:{ sm: "240px" } , width: { xs: "100%" , sm: "calc(100% - 240px)"  } }}  position="static">
        <Toolbar>

        <IconButton onClick={() => {setDrawerType("temporary"); setNoneOrBlock("block");} } sx={{ display: { sm: "none" } }} color="inherit">
          <Menu />
        </IconButton>
        
          <Link href="/" sx={{ flexGrow: 1 , "&:hover": { color: "black" } }} underline="none" variant="body2"  color="inherit">My Expenses</Link>

          <Typography mr={1} variant="body1" color="inherit" >Gemy</Typography>

          <Avatar alt="Gamal" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
  )
}
