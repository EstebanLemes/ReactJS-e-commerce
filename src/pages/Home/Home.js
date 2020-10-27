import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Slider from "../../components/Sliders/Slider";
import ItemList from "../../components/Items/ItemList/ItemList";
import HotProducts from "../../components/HotProducts/HotProducts";

const Home = (props) => {
  return (
    <div>
      <ToastContainer />
      <Slider />
      <>
        <h1 className="text-center">Productos destacados</h1>
        <HotProducts
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <hr />
        <h2 className="text-center">Todos los productos</h2>
        <ItemList />
      </>
    </div>
  );
};

export default Home;
