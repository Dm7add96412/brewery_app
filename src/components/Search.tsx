import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [ searchWord, setSearchWord] = useState<string>('')
    const navigate = useNavigate()

    const searchBrewery = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            navigate(`/search/${searchWord}`)
        }
    }

    return (
        <input type="text" 
        placeholder='search' 
        onKeyDown={searchBrewery}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)} />
    )
}

export default Search