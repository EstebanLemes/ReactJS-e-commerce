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
        <HotProducts
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <ItemList />
      </>
    </div>
  );
};

export default Home;
