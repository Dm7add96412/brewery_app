import React from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const ErrorPage = () => {

  return (
    <Box
    display='flex'
    flexDirection='column'
    alignItems='center'>
      <Alert severity="error"> Page not found! </Alert>
    </Box> 
  )
}

export default ErrorPage

