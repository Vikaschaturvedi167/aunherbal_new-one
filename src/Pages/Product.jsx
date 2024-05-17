import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Styling/Product.css"; // Import CSS file for styling
import { AppContext } from "../authcontext/AppContext";
import video from "./images/v9.mp4";

const useFetchProducts = (token, sortByPrice) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://aun-herbalbackend-production.up.railway.app/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          let sortedProducts = response.data;
          if (sortByPrice === "ascending") {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
          } else if (sortByPrice === "descending") {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
          }
          setProducts(sortedProducts);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [sortByPrice, token]);

  return products;
};

const Product = () => {
  const { authdetails } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  const products = useFetchProducts(authdetails.token, sortByPrice);

  const addToCart = async (productId) => {
    try {
      const token = authdetails.token;
      if (!token) {
        alert("Please login to add products to your cart.");
        return;
      }

      const payload = {
        userId: authdetails.userId,
        productId,
        quantity: 1,
      };

      const response = await axios.post(
        "https://aun-herbalbackend-production.up.railway.app/api/cart/add-to-cart",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Product added to cart successfully!");
      } else {
        alert("Error 200, try again");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortByPrice = (event) => {
    setSortByPrice(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-box">
      <div className="vid-main">
        <video
          src={video}
          controls
          loop
          autoPlay
          muted
          className="video1"
        ></video>
      </div>

      <div className="product-container">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <select
            value={sortByPrice}
            onChange={handleSortByPrice}
            className="sort-select"
          >
            <option value="">Sort by Price</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/products/${product._id}`}>
              <img
                src={product.picture}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-gender">
                <span style={{ fontWeight: "bolder" }}>Gender</span> :{" "}
                {product.gender}
              </div>
              <div className="product-price">₹{product.price}</div>
            </div>

            <button
              onClick={() => addToCart(product._id)}
              className="add-to-cart-btn"
              id="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
