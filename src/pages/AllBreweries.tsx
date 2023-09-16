import React, { useState, useEffect} from 'react'
import axios, {AxiosError} from 'axios'
import { Brewery } from '../interfaces/Brewery'
import { useNavigate } from 'react-router-dom'

const AllBreweries = () => {
  const [breweries, setBreweries] = useState<Brewery[] | undefined>(undefined)
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    try {
      const response = await axios.get('https://api.openbrewerydb.org/v1/breweries?per_page=1000')
      setBreweries(response.data)
      //  console.log(response.data)
    } catch(e) {
      const error = e as AxiosError
      console.log('Axios error:', error.response?.status, error.message)
    }
  }
  
  return (
    <div>
    {
    (breweries?.map(b => 
      <div key={b.id}>
        <p>{b.name} <button onClick={() => navigate(`/singlebrewery/${b.id}`)}>Details</button></p>
      </div>))}
    </div> 
  )
}

export default AllBreweries