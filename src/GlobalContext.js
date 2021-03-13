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
    const [thankfulModalIsOpen, setThankfulModalIsOpen] = React.useState(false);
    
    // actions
    //Card
    const [starShipClicked, setStarShipClicked ] = React.useState(null);
    //Cart
    const [starShipsInCart, setStarShipsInCart ] = React.useState([]);
    const [mobileCartIsOpen, setMobileCartIsOpen ] = React.useState(false);
    // const [starShipsInCart, setStarShipsInCart ] = usePersistedState('starShipsInCart', []);
    const [totalPrice, setTotalPrice ] = React.useState(0)
    const [totalQuantity, setTotalQuantity ] = React.useState(0)

     
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

    const isMobile = () => {
      return window.matchMedia('(max-width: 768px)').matches;
  }
   
    function isIncludedInCart(starShipClicked) {
      return !!starShipsInCart.find((starShip) => starShip.name === starShipClicked.name);
    }

    return (
        <GlobalContext.Provider 
            value={{
                isMobile,
                starShips,
                theme, setTheme,
                totalPrice, setTotalPrice,
                totalQuantity, setTotalQuantity,
                mobileCartIsOpen, setMobileCartIsOpen,
                starShipClicked, setStarShipClicked,
                starShipsInCart, setStarShipsInCart,
                ThemesBtnClicked, setThemesBtnClicked,
                initialModalIsOpen, setInitialModalIsOpen,
                productModalIsOpen, setProductModalIsOpen,
                thankfulModalIsOpen, setThankfulModalIsOpen,
                isIncludedInCart
            }}
        
        >
            {children}
        </GlobalContext.Provider>
    )
}