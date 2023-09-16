import React, {useEffect, useState} from 'react'
import { Brewery } from '../interfaces/Brewery'
import axios from 'axios'
import { useParams } from 'react-router-dom'
 
const SinglepageBrewery = () => {
  const [brewery, setBrewery] = useState<Brewery | undefined>(undefined)
  const params = useParams()
  const breweryId = params.breweryId
  // console.log(breweryId)

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/v1/breweries/${breweryId}`)
      .then((response) => {
        setBrewery(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }, [])

  return (
    <div>
      <p>Brewery name: {brewery?.name}</p>
      <p>City: {brewery?.city}</p>
      <p>Country: {brewery?.country}</p>
      <p>Website: {brewery?.website_url}</p>
      
    </div>
    
  )
}

export default SinglepageBrewery