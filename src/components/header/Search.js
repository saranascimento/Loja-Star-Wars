import React from 'react';
import styled from 'styled-components';

const FindStarship = styled.input`
    width: 80%;
    padding: 1em;
    border-radius: 4px;
    outline: none;
    border: none;
`;

const Search = () => {
    return (
        <FindStarship type='text' placeholder='Buscar Nave...'/>
    )
}

export default Search;