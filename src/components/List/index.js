import React from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import "./style.css";

/**
 * List
 *
 * This components is in charge to display a list of product
 *
 * @param {array} products - array of products
 *
 * @return {jsx}
 */

const List = ({ products }) => {
  return (
    <ul className="list">
      {products.map(({ id, name, price, shoes_pictures }) => (
        <Item
          key={id}
          id={id}
          price={price}
          title={name}
          source={shoes_pictures[0]}
        />
      ))}
    </ul>
  );
};

const { array } = PropTypes;
List.propTypes = { products: array };
List.defaultProps = { products: [] };

export default List;
