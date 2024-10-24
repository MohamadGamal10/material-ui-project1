import React, { useState } from 'react'
import './create.css'
import { Box, InputAdornment, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import {  ChevronRight } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: theme.palette.ali.main,
    '&:hover': {
      backgroundColor: theme.palette.ali.main,
    },
  }));

export default function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  return (
    <Box width={"300px"} mt={"66px"} component={'form'}>
      <TextField
          fullWidth
          onChange={(eo) => {
            settitle(eo.target.value);
          }}
          label="Title"
          id="filled-start-adornment"
          sx={{ mt: "22px", display: "block" }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">👉</InputAdornment>,
            },
          }}
          variant="filled"
        />



      <TextField
       fullWidth
       onChange={(eo) => {
        setprice(Number(eo.target.value));
      }}
       sx={{ mt: "22px", display: "block" }}
          label="Price"
          id="filled-start-adornment"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
          }}
          variant="filled"
        />

       <ColorButton onClick={() => {
         const data = { price, title };
        axios.post("http://localhost:3100/mydata", data , {
          headers: {
            "Content-Type": "application/json",
          }
        }).catch((err) => {
          console.log(err);
        }).finally(() => {
          navigate("/");
        })
       }} sx={{ mt: "22px" }} variant="contained">Submit <ChevronRight /></ColorButton>
    </Box>
  )
}
