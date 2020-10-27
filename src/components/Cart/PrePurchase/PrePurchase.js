import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../../contexts/cartContext";
import { toast } from "react-toastify";

require('dotenv').config()

export default function PrePurchase(props) {
  const history = useHistory();
  const [setCart] = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const checkout = (e) => {
    e.preventDefault();

    let name = document.getElementById("chName").value;
    let phone = document.getElementById("chPhone").value;
    let email = document.getElementById("chEmail").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      buyer: { name: name, phone: phone, email: email },
      products: props.products,
      total: props.total,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}/bought`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        toast.success(
          `Orden creada con exito, su ID de compra es: ${result._id}`,
          {
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        actualizarStock();
        history.push("/");
      })
      .catch((error) => console.log("error", error));
  };

  const actualizarStock = () => {
    props.items.map((product) => {
      fetch(
        `${process.env.REACT_APP_API_URL}/products/${product.itemId}`
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {

          let newStock = res.stock - product.count;

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            stock: newStock,
          });

          var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(
            `${process.env.REACT_APP_API_URL}/products/${product.itemId}`,
            requestOptions
          ).then((res) => console.log(res));
        });
    });
  };

  const verifyEmail = () => {
    if (
      document.getElementById("chEmail").value ===
      document.getElementById("chVerifyEmail").value
    ) {
      setVisible(true);
    }
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="chName">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="chName"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="chPhone">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="chPhone"
              placeholder="11-1234-5678"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="chEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="chEmail"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="chEmail">Verify Email</label>
            <input
              type="verifyEmail"
              className="form-control"
              id="chVerifyEmail"
              placeholder="Re enter Email"
              onChange={verifyEmail}
            />
          </div>
          {visible !== false ? (
            <div className="col-12 text-right">
              <button
                type="submit"
                onClick={checkout}
                className="btn btn-success"
              >
                Finalizar Compra
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
