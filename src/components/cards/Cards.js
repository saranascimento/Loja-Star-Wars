import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: center;
    
`;

const Cards = () => {
    const {starShips, filterStarShip} = React.useContext(GlobalContext);
   
   if(starShips.length < 0) return null
   
    return (
       <>
       <Container>
            { starShips && starShips
            .filter((starShip) => {
                return starShip.name.toLowerCase().indexOf(filterStarShip) !== -1;
              })
            .map(starShip => {
                return <Card product={starShip} key={starShip.name} />
            }).slice(0, 9)}
        </Container>
       </>
    )
}

export default Cards;