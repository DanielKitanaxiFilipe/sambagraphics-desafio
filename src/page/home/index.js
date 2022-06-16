import { useState, useEffect } from "react";

import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { Produt } from "../../components/Produt";

import productsFile from "../../util/products.json";

function Home(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
      async function loadProducts () {
        await setProducts(productsFile.products);
      }

      loadProducts();
      //console.log(products)
    },
  [])

  return(<>
  <Menu/>
  <div className="main">
    <div className="container">
      <h1 className="color-orange">Lançamento</h1>
      <hr />
      <div className="row mt-40">
        { 
          products.map(product => (
            <Produt 
              title={product.title}
              autor={product.autor}
              description={product.description}
              price={product.price}
            />

          ))
        }
      </div>
    </div>
  </div>
  <Footer/>
  </>);
}
export default Home;