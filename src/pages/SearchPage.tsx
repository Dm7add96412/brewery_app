import React, {useEffect, useState} from 'react'
import { Brewery } from '../interfaces/Brewery'
import axios, {AxiosError} from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const SearchPage = () => {
    const [ foundBreweries, setFoundBreweries] = useState<Brewery[] | undefined>(undefined)
    const params = useParams()
    const searchWord = params.searchWord
    const navigate = useNavigate()
    // console.log('searchword:', searchWord)

    useEffect(() => {
        searchBrewery()
      }, [searchWord])

    const searchBrewery = async() => {
        try {
            const response = await axios.get(`https://api.openbrewerydb.org/v1/breweries/search?query=${searchWord}&per_page=40`)
            if(response.data.length !== 0) {
                setFoundBreweries(response.data)
                console.log('foundBreweries: ',response.data)
            } else {
                navigate('nofound')
            }
        } catch(e) {
            const error = e as AxiosError
            console.log('Axios error: ', error.response?.status, error.message)
        }
    }

  return (
    <div>
    {(foundBreweries?.map(b => 
      <div key={b.id}>
        <p>{b.name} <button onClick={() => navigate(`/singlebrewery/${b.id}`)}>Details</button></p>
      </div>))}
    </div>
  )
}

export default SearchPage