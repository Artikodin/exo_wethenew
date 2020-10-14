import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProductsList, Product } from "./pages";
import { getProducts } from "./modules/products/services";

const Routes = () => {
  const [products, setProducts] = useState([]);

  /**
   * addIdToProduct
   *
   * Should not be used in prod.
   * Trick to mock an id to product based on map index.
   * 
   * @param {array} products - array of products
   *
   * @return {array} array of products with mecked id
   */
  const addIdToProduct = (products) =>
    products.map((product, index) => ({ id: index, ...product }));

  useEffect(() => {
    getProducts().then((products) => setProducts(addIdToProduct(products)));
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ProductsList products={products} />
        </Route>
        <Route path="/product/:id">
          <Product products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
