import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { Brewery } from '../interfaces/Brewery'
import { Grid } from '@mui/material'
 
const SinglepageBrewery = () => {
  const [brewery, setBrewery] = useState<Brewery | undefined>(undefined)
  const params = useParams()
  const breweryId = params.breweryId
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`)
      .then((response) => {
        setBrewery(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }, [])

  return (
    <Box 
      display='flex'
      flexDirection='column'
      alignItems='center'>
        {isLoading ? 
        <CircularProgress/> : 
      (<Grid container justifyContent='center' 
      flexDirection='column'
      alignItems='center'>
      <p><b>Brewery name: </b>{brewery?.name}</p>
      <p><b>City: </b>{brewery?.city}</p>
      <p><b>Country: </b>{brewery?.country}</p>
      <p><b>Website: </b>{brewery?.website_url ? <Link href={brewery?.website_url}
      underline='hover'>{brewery?.website_url}</Link> : "Brewery doesn't have a website"} </p>
      </Grid>)}
    </Box>
    
  )
}

export default SinglepageBrewery