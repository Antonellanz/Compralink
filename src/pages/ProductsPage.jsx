
import { useContext } from "react";

import CardComponent from "../components/CardComponent";
import { ProductContext } from "../contex/ProductContext";
import {CartContext} from "../contex/CartContext"
function ProductsPage() {
  const{products}=useContext(ProductContext)
  const {addProduct, removaProduct}=useContext(CartContext)


  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map((product) => (
        <CardComponent
          key={product.id} // Es importante agregar una clave única para cada elemento en un listado
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handlerAdd={()=> addProduct(product)}
          handlerRemove={()=> removeProduct(product.id)}
        ></CardComponent>
      ))}
    </>
  );
}

export default ProductsPage;
