import React from "react";
import PropTypes from "prop-types";

import { List, PageLayout } from "../../components";

/**
 * ProductsList
 *
 * This components is in charge to display the products list page
 *
 * @param {array} products - array of products
 *
 * @return {jsx}
 */

const ProductsList = ({ products }) => {
  return (
    <PageLayout>
      <List products={products} />
    </PageLayout>
  );
};

const { array } = PropTypes;
ProductsList.propTypes = { products: array };
ProductsList.defaultProps = { products: [] };

export default ProductsList;
