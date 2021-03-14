import React from 'react';
import yoda from './styles/themes/yoda';
import usePersistedState from './utils/usePersistedState';
import useSessionStorage from './utils/useSessionStorage'
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
    const [productClicked, setProductClicked ] = React.useState(null);
    const [filterStarShip, setFilterStarShip] = React.useState('');

    //Cart
    const [mobileCartIsOpen, setMobileCartIsOpen ] = React.useState(false);
    const [cart, setCart ] = useSessionStorage('cart', []);
  
    React.useEffect(() => {
      let loadStarWarsStore = ()=> {
        const url = 'https://swapi.dev/api/starships/';
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

    const isSmall = () => {
      return window.matchMedia('(max-width: 1024px)').matches;
    }
   
    const isIncludedInCart =  (productClicked) => {
      return !!cart.find((starShip) => starShip.name === productClicked.name);
    }

    const filterUpdate = (value) => {
      setFilterStarShip(value);
    };


    const getTotalPrice = () => {
      return cart.reduce((sum, {cost_in_credits, quantity}) =>  sum + (cost_in_credits === 'unknown' ? 186 : Number(
        cost_in_credits.slice(0,3)) * quantity), 0)

    }

    const getTotalQuantity = () => {
      return cart.reduce(
        (sum, {quantity }) => 
          sum + quantity
        , 0
      );
    };

    return (
        <GlobalContext.Provider 
            value={{
                isSmall,
                starShips,
                getTotalPrice,
                filterUpdate,
                getTotalQuantity,
                theme, setTheme,
                isIncludedInCart,
                filterStarShip, setFilterStarShip,
                productClicked, setProductClicked,
                cart, setCart,
                mobileCartIsOpen, setMobileCartIsOpen,
                ThemesBtnClicked, setThemesBtnClicked,
                initialModalIsOpen, setInitialModalIsOpen,
                productModalIsOpen, setProductModalIsOpen,
                thankfulModalIsOpen, setThankfulModalIsOpen,
            }}
        
        >
            {children}
        </GlobalContext.Provider>
    )
}