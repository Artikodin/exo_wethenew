import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { List, PageLayout } from "../../components";
import ProductDetail from "./ProductDetail";

/**
 * Product
 *
 * This components is in charge to display the product detail page
 *
 * @param {array} products - array of products
 *
 * @return {jsx}
 */

const Product = ({ products }) => {
  let { id } = useParams();

  return (
    <PageLayout>
      <ProductDetail product={products[id]} />
      <h4 className="product-title">Related Products</h4>
      <List products={products} />
    </PageLayout>
  );
};

const { array } = PropTypes;
Product.propTypes = { products: array };
Product.defaultProps = { products: [] };

export default Product;
