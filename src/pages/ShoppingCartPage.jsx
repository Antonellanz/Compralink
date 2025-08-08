import { useContext } from "react";
import { CartContext } from "../contex/CartContext";

function ShoppingCartPage() {
  const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList && shoppingList.length > 0 ? (
            shoppingList.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.title}</th>
                <td>${product.price.toFixed(2)}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-secondary me-2"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button 
                      className="btn btn-secondary ms-2"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button 
                    className="btn btn-danger"
                    onClick={() => removeProduct(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No hay productos en el carrito.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Comprar
        </button>
      </div>
    </>
  );
}

export default ShoppingCartPage;


