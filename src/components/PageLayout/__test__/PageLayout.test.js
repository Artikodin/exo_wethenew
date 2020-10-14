import React from "react";
import { cleanup } from "@testing-library/react";
import { renderWithRouter } from "../../../utils/jest";

import PageLayout from "..";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("<PageLayout />", () => {
  test("should render withouth a problem", () => {
    const { container } = renderWithRouter(<PageLayout></PageLayout>);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("should contain correct children", () => {
    const children = "test";
    const { getByText } = renderWithRouter(<PageLayout>{children}</PageLayout>);

    const dropdownNode = getByText(children);
    expect(dropdownNode).toBeInTheDocument();
  });
});
