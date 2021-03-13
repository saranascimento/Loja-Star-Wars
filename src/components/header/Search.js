import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';

const FindStarship = styled.input`
    width: 80%;
    padding: 1em;
    border-radius: 4px;
    outline: none;
    border: none;
`;

const Search = () => {
    const {filterUpdate} = React.useContext(GlobalContext);

    return (
        <FindStarship 
            type='text' 
            placeholder='Buscar Nave...'
            onChange={(event) => {
                filterUpdate(event.target.value.toLowerCase())
            }}
        />
    )
}

export default Search;