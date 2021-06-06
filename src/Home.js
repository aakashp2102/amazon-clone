import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/SMP_Desktop_1x_2._CB669743293_.jpg"
        ></img>
        <div className="home__row">
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={1234}
            title="The Lean Startup"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
