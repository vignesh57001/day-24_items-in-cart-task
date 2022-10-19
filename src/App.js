import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "./Card";
import SideBar from "./SideBar"
import { useState } from 'react'

function App() {
  const [pets, setPets] = useState([
    {
      id: "1",
      name: "Luna",
      breed: "Bengal",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Bengal_body_6.jpg?itok=HoyVWkCr",
      price: 13000
    },
    {
      id: "2",
      name: "Bella",
      breed: "Manx",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/ManxSH_body_6.jpg?itok=Xx6lRcVZ",
      price: 24000
    },
    {
      id: "3",
      name: "Lucy",
      breed: "LaPerm",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/LaPerm_body_6.jpg?itok=lp-fMXHI",
      price: 4300
    },
    {
      id: "4",
      name: "Kitty",
      breed: "Turkish Van",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/TurkishVan_body_7.jpg?itok=laUmF3Og",
      price: 8500
    },
    {
      id: "5",
      name: "Cleo",
      breed: "Munchkin ",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Munchkin.jpg?itok=Ebp6te82",
      price: 32000
    },
    {
      id: "6",
      name: "Rosy",
      breed: "Persian",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Somali_body_7.jpg?itok=jHwEUG5G",
      price: 20000
    },
    {
      id: "7",
      name: "Lily",
      breed: "Ragdoll ",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Siberian_body_6.jpg?itok=A-sQ7jCz",
      price: 17500
    },
    {
      id: "8",
      name: "Nala",
      breed: "Scottish Fold ",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Ragdoll_240x240%20%281%29.jpg?itok=WZWLRF05",
      price: 13500
    },
    {
      id: "9",
      name: "Chole",
      breed: "Pixiebob",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/PersianSolid_body_6.jpg?itok=l0css2fz",
      price: 11900
    }

  ]);

  const [cartItems, setCartItems] = useState([])
  let addToCart = (pet) => {
    setCartItems([...cartItems, pet])
  }
  let removeFromCart = (pet) => {
    const indexVal = cartItems.findIndex(obj => obj.id == pet);
    cartItems.splice(indexVal, 1);
    setCartItems([...cartItems])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              pets.map((pet) => {
                return <Card pet={pet} addToCart={addToCart} cartItems={cartItems} />
              })
            }

          </div>
        </div>
        <div className="col-lg-4">
          <h2>Cart Items</h2>
          <SideBar cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  )

}
export default App;
