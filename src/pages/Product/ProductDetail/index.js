import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./style.css";

/**
 * ProductDetail
 *
 * This components is in charge to display the product's detail
 *
 * @param {object} product - the product datas
 *
 * @return {jsx}
 */

const ProductDetail = ({ product }) => {
  const {
    name,
    brand,
    Description,
    price,
    size: sizes,
    shoes_pictures,
  } = product;

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [shoesSize, setShoesSize] = useState(0);

  useEffect(() => {
    setMainImageIndex(0);
    sizes && setShoesSize(sizes[0]);
  }, [sizes]);

  return (
    <div className="detail">
      <div className="part">
        <div>
          <h2 className="title-2">{name}</h2>
          <p className="brand">{brand}</p>
          <p className="description">{Description}</p>
        </div>
        <div className="thumbnails">
          {shoes_pictures &&
            shoes_pictures.map((shoes_picture, index) => (
              <button
                key={index}
                onClick={() => setMainImageIndex(index)}
                className={
                  mainImageIndex === index ? "button--activated" : undefined
                }
              >
                <img src={shoes_picture} alt={name} />
              </button>
            ))}
        </div>
      </div>
      <div className="part">
        <img
          className="main-img"
          src={shoes_pictures && shoes_pictures[mainImageIndex]}
          alt={name}
        />
        <div className="price">{price} $</div>
      </div>
      <div className="part">
        <div>
          <h4 className="title-4">Sizes:</h4>
          <div className="sizes">
            {sizes &&
              sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setShoesSize(size)}
                  type="button"
                  className={`size-button ${
                    shoesSize === size && "size-button--activated"
                  }`}
                >
                  {size}
                </button>
              ))}
          </div>
        </div>
        <button className="submit-button">Add to cart</button>
      </div>
    </div>
  );
};

const { object } = PropTypes;
ProductDetail.propTypes = { product: object };
ProductDetail.defaultProps = { product: {} };

export default ProductDetail;
