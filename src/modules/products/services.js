/**
 * getProducts
 *
 * Get an array of the differents products
 *
 *
 * @return {array} array of products
 */

export const getProducts = async () =>
  fetch("/products_wethenew.json")
    .then((response) => response.json().then((data) => data))
    .catch((error) => console.log("Fetch error : ", error));
