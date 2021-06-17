import { useState } from "react"
import { BsSearch } from 'react-icons/bs'

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = event => {
        setSearchQuery(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.onSearch(searchQuery)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    aria-label="video-search"
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Enter Band name!"
                />
                <button
                    type="submit"
                    aria-label="search"
                >
                    <BsSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchBar