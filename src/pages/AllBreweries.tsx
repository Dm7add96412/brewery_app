import React, { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { Brewery } from '../interfaces/Brewery'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

const ITEMS_PER_PAGE = 100
const INITIAL_PAGES = 54

const AllBreweries = () => {
  const [breweries, setBreweries] = useState<Brewery[] | undefined>(undefined)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openbrewerydb.org/v1/breweries?per_page=${ITEMS_PER_PAGE}&page=${currentPage}`
      )
      if (response.data) {
        // console.log(response.data)
        setBreweries((prevBreweries) => {
          const newBreweries = response.data.filter((newBrewery: Brewery) => {
            // Check if the brewery already exists in the array
            return !prevBreweries?.some((prevBrewery) => prevBrewery.id === newBrewery.id);
          })
        
          return prevBreweries ? [...prevBreweries, ...newBreweries] : newBreweries;
        })
        setCurrentPage((prevPage) => prevPage + 1)
      }
    } catch (e) {
      const error = e as AxiosError
      console.log('Axios error:', error.response?.status, error.message)
    }
  };

  const loadMore = () => {
    if (currentPage < INITIAL_PAGES) {
      fetchData()
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {breweries?.map((b) => (
        <Grid container spacing={2} 
            key={b.id}
            padding={0.3}>
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
        </Grid>
      ))}
      {currentPage < INITIAL_PAGES && (
        <Grid container justifyContent='center'>
          <Button variant='outlined' onClick={loadMore}>Load More</Button>
        </Grid>
      )}
    </Box>
  )
}

export default AllBreweries