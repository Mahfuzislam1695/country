import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
  

function App() {
const [countries, setCountries] = useState([]);
const [cart,setCart] = useState([])

useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data=>setCountries(data))
},[])

const handleAddCountry = (country) => {
  const newCart = [...cart,country];
  setCart(newCart);
}

  return (
    <div className="App">
      <h2>countries number:{countries.length}</h2>
      <Cart cart ={cart}></Cart>
      
         {
            countries.map(country => 
              <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
         }
        
    </div>

  );
}

export default App;
