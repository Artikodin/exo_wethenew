import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

/**
 * Item
 *
 * This components is in charge to display an item of the list
 *
 * @param {number} id - the product id
 * @param {string} source - the product main image source
 * @param {string} title - the product title
 * @param {string} price - the product price
 *
 * @return {jsx}
 */

const Item = ({ id, source, title, price }) => {
  return (
    <li className="card" data-testid="list-item">
      <Link to={`/product/${id}`} className="custom-link">
        <img className="card__image" src={source} alt={title} />
        <h3 className="card__title">{title}</h3>
        <p className="card__price">{price} $</p>
      </Link>
    </li>
  );
};

const { string } = PropTypes;
Item.propTypes = { source: string, title: string, price: string };
Item.defaultProps = { source: "", title: "", price: "" };

export default Item;
