import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./style.css";

/**
 * PageLayout
 *
 * This components is in charge to display the page layout
 * to keep same design pattern through the project
 *
 * @return {jsx}
 */

const PageLayout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <div>
          <Link to="/" className="custom-link">
            WETHENEW
          </Link>
        </div>
      </header>
      <div className="mainContainer">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

const { node } = PropTypes;
PageLayout.propTypes = { children: node };
PageLayout.defaultProps = { children: null };

export default PageLayout;
