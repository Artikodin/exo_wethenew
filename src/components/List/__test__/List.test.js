import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/jest";

import List from "..";

const mockProducts = [
  {
    name: "Air Jordan Mid Iridescent ReflectiveWhite",
    brand: "Jordan",
    price: "230",
    size: ["36", "37", "41"],
    shoes_pictures: [
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-jordan-1-Mid-Iridescent-Reflective-White-CK6587-100-1_2000x.png?v=1583933418",
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Air-jordan-1-Mid-Iridescent-Reflective-White-CK6587-100-2_2000x.png?v=1583933426",
    ],
    Description:
      "The Air Jordan 1 Mid collection is growing! The brand in the Jumpman offers us a new declination intended for women, in a colour that at first glance seems rather sober but which is much more worked once its reflective elements are visible.",
  },
  {
    name: "Air Force 1 '07 Barely Grape",
    brand: "Nike",
    price: "170",
    size: ["36", "37"],
    shoes_pictures: [
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Force-1-_07-Barely-Grape-CU3449-100-1_2000x.png?v=1583921569",
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Force-1-_07-Barely-Grape-CU3449-100-1_2000x.png?v=1583921569",
    ],
    Description:
      "Nike's most iconic silhouette makes a comeback in a pale colourMauve, ideal for the upcoming summer season. Designed by Bruce Kilgore in 1982, this is the first pair with Nike AIR technology, which was originally intended for basketball.",
  },
  {
    name: "Air Max97 Black",
    brand: "Nike",
    price: "200",
    size: ["36", "37", "41", "45", "49"],
    shoes_pictures: [
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Max-97-Black-921733-006-2_2000x.png?v=1583939000",
      "https://cdn.shopify.com/s/files/1/2358/2817/products/Wethenew-Sneakers-France-Nike-Air-Max-97-Black-921733-006-3_2000x.png?v=1583939007",
    ],
    Description:
      "Nike unveils a new iteration of one of its flagship models: the Nike Air Max 97A pair with multiple inspirations, especially water represented by the characteristic lines of the model.",
  },
];

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<List />", () => {
  test("should render withouth a problem", () => {
    const { container } = renderWithRouter(<List />);

    expect(container.firstChild).toMatchSnapshot();
  });
  
  test("should list exact number of item", () => {
    const { queryAllByTestId } = renderWithRouter(
      <List products={mockProducts} />
      );
      
      const listItems = queryAllByTestId("list-item");
      expect(listItems.length).toBe(3);
  });
});
