import React, {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import CircularProgress from '@mui/material/CircularProgress'

import { Brewery } from '../interfaces/Brewery'

const SearchPage = () => {
    const [ foundBreweries, setFoundBreweries] = useState<Brewery[] | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const params = useParams()
    const searchWord = params.searchWord
    const navigate = useNavigate()

    useEffect(() => {
        searchBrewery()
      }, [searchWord])

    const searchBrewery = async() => {
        setIsLoading(true)
        try {
            const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries/search?query=${searchWord}&per_page=200`)
            if(response.data.length !== 0) {
                setFoundBreweries(response.data)
                setIsLoading(false)
                // console.log('foundBreweries: ',response.data)
            } else {
                setIsLoading(false)
                navigate('/nofound') 
            }
        } catch(e) {
            const error = e as AxiosError
            console.log('Axios error: ', error.response?.status, error.message)
            setIsLoading(false)
        }
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent='center'>
      <p>Search results for the search word <u><b>{searchWord}</b></u></p>
      </Grid>
      {!isLoading ? (foundBreweries?.map(b => 
        <Grid container spacing={2} key={b.id} padding={0.3}>
          <Grid xs={4}>
          </Grid>
          <Grid xs={2.5}>
            {b.name}
          </Grid>
          <Grid xs={1}>
          </Grid>
          <Grid xs={4.5}>
            <Button size='small' variant='contained' onClick={() => navigate(`/singlebrewery/${b.id}`)}>Details</Button>
          </Grid>
        </Grid>)) : 
        <Grid container justifyContent='center'>
          <CircularProgress/>
        </Grid>}
    </Box>
  )
}

export default SearchPage