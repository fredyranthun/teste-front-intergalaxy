import { useState } from "react"
import { BsSearch } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

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
        <Form
            inline
            onSubmit={handleSubmit}
            className="justify-content-center m-4"
        >
            <InputGroup>
                <Form.Label htmlFor="searchBand" srOnly>Search your band</Form.Label>
                <Form.Control
                    type="text"
                    value={searchQuery}
                    onChange={handleChange}
                    id="searchBand"
                    placeholder="Search your Band!"
                />
                <InputGroup.Append>
                    <Button
                        variant="dark"
                        type="submit"
                    >
                        <BsSearch />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default SearchBar