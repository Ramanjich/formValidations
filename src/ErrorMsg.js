import { Box, Typography } from '@mui/material'
import React from 'react'

export default function ErrorMsg({message}) {
  return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        gap:'2px',
        mt:'3px'
    }}>
        <Typography color='error.main' variant='span' fontSize='18px'>
    {message}
        </Typography>
    </Box>
  )
}
