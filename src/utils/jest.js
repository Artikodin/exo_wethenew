import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";

/**
 * renderWithRouter
 *
 * Render a component with a mocked router. 
 * Usefull when you want to test a component containing react router component.
 * 
 * @param {node} children - react component you want to add routing logic
 * @param {object} routeParams - different parameter you use to simulate a routing behaviour
 *
 * @return {node} A react router mock
 */

export const renderWithRouter = (
  children,
  {
    url = "/",
    route: { path = "/", isExact = false } = {},
    history = createMemoryHistory({ initialEntries: [url] }),
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} exact={isExact}>
          {children}
        </Route>
      </Router>
    ),
    history,
  };
};
