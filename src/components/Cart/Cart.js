import React, { useContext, useState, useEffect } from "react";
import "./styles.css";
import { CartContext } from "../../contexts/cartContext";
import { NavLink } from "react-router-dom";
import PrePurchase from "./PrePurchase/PrePurchase";

export default function Cart() {
  const [cart] = useContext(CartContext);
  const [showPre, setShowPre] = useState(false);
  const [total, setTotal] = useState();
  const [items, setItems] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let newTotal = 0;
    let product = [];
    cart.map((item)=>{
        newTotal = newTotal + (item.price.amount * item.count);
        product.push(item.itemId);
      })
      setProducts(product)
      setItems(cart)
      setTotal(newTotal)
  },[]);

  const prepurchase = () => {
    setShowPre(true);
  };

  return (
    <div className="mt-10">
      <div className="row">
        {cart.length === 0 ? (
          <div>
            <p>Su carrito esta vacio.</p>
            <NavLink to={"/"} className="btn btn-info">
              Ver Productos
            </NavLink>
          </div>
        ) : (
          cart.map((item) => (
            <div className="col-12 cart-items" key={item.itemId}>
              <div className="row">
                <div className="col-2">
                  <img
                    className="card-img-top w-100 h-100"
                    src={item.imgURL}
                    alt="Cards"
                  />
                </div>
                <div className="col-3">Nombre: {item.name}</div>
                <div className="col-2">Cantidad: {item.count}</div>
                <div className="col-2">
                  U.Price: ${item.price.amount} ({item.price.currency_id})
                </div>
                <div className="col-3">
                  Sub-Total: ${(item.price.amount * item.count).toFixed(2)} (
                  {item.price.currency_id})
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length !== 0 ? (
        <div className="text-right">
          <p>Total: ${total}</p>
        </div>
      ) : (
        ""
      )}
      <div className="text-right">
        {cart.length > 0 ? (
          <input
            onClick={prepurchase}
            className="btn btn-info"
            defaultValue="Confirmar compra"
          />
        ) : (
          ""
        )}
      </div>
      {showPre === true ? <PrePurchase products={products} items={items} total={total} /> : ""}
    </div>
  );
}
