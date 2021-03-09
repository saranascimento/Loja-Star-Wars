import React from 'react';
import yoda from './styles/themes/yoda';
import usePersistedState from './utils/usePersistedState';
export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    // inicial
    const [starShips, setStarShips] = React.useState([]);
    const [theme, setTheme] = usePersistedState('theme', yoda);
    const [ThemesBtnClicked, setThemesBtnClicked] = React.useState(false)

    //Modal
    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(false);
    const [productModalIsOpen, setProductModalIsOpen] = React.useState(false);
    
    // actions
    //Card
    const [starShipClicked, setStarShipClicked ] = React.useState(null);
    //Cart
    const [starShipsInCart, setStarShipsInCart ] = React.useState([]);
    // const [starShipsInCart, setStarShipsInCart ] = usePersistedState('starShipsInCart', []);
    const [totalPrice, setTotalPrice ] = React.useState(0)
     
    React.useEffect(() => {
      let loadStarWarsStore = ()=> {
        const url = 'http://swapi.dev/api/starships/';
        fetch(url, {mode: 'cors'}
        ).then((response) => response.json()
        ).then(data =>  {
          let ships = data.results.map(starShip => {
            starShip.quantity = 1;
            return starShip
          })
          setStarShips(ships)
        })
      }
      loadStarWarsStore()
    }, [])

   
    function isIncludedInCart(starShipClicked) {
      return !!starShipsInCart.find((starShip) => starShip.name === starShipClicked.name);
    }

    return (
        <GlobalContext.Provider 
            value={{
                starShips,
                theme, setTheme,
                initialModalIsOpen, setInitialModalIsOpen,
                productModalIsOpen, setProductModalIsOpen,
                starShipClicked, setStarShipClicked,
                starShipsInCart, setStarShipsInCart,
                ThemesBtnClicked, setThemesBtnClicked,
                totalPrice, setTotalPrice,

                isIncludedInCart
            }}
        
        >
            {children}
        </GlobalContext.Provider>
    )
}