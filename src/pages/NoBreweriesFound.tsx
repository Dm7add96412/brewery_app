import React from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

const NoBreweriesFound = () => {

  return (
    <Box
    display='flex'
    flexDirection='column'
    alignItems='center'>
        <Alert severity="warning"> No breweries found! </Alert>
    </Box>
  )
}

export default NoBreweriesFound