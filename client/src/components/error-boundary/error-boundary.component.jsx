import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if(this.state.hasError) {
      return (
        <div className="error__overlay">
          <div className="error__container" />
          <h2 className="error__text">Sorry this page is broken</h2>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;