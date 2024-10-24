import React, { useEffect, useState } from 'react'
import './home.css'
import { Box, IconButton, Paper, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import axios from 'axios'

export default function Home() {
  const [data , setdata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3100/mydata")
    .then((res) => {
      setdata(res.data);
    })
  }, [])

  let totalPrice = 0;

  return (
    <Box  mt={"66px"}>
      {data.map((item) => {
       totalPrice += item.price;
       return (
       <Paper key={item.id}   sx={{ position: "relative" , mt: "22px" , pb: "7px" , pt: "27px" , width: "360px" , display: "flex" , justifyContent: "space-between" }}>
       <Typography  variant="h6" sx={{ ml: "16px", fontSize: "1.3em" }} >
           {item.title}
       </Typography>
       <Typography variant="h6" sx={{
           mr: "33px",
           fontWeight: 500,
           fontSize: "1.4em",
           opacity: "0.8",
         }}>
           $ {item.price}
       </Typography>
       <IconButton onClick={() => {
        axios.delete(`http://localhost:3100/mydata/${item.id}`)
        .then(() => {
          const newArr =data.filter((myObject) => {
            return myObject.id !== item.id;
          });
      
          setdata(newArr);
        })
      }} sx={{ position: "absolute" , right: "1px" , top: "1px" }}>
           <Close sx={{ fontSize: "20px" }} />
       </IconButton>
     </Paper>
      );
    })}
     

     <Typography mt="55px" textAlign="center" variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>
  

    </Box>
  )
}
