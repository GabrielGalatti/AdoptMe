import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      redirect: false
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("The app has an error:", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          Um erro ocorreu,
          <Link to="/">CLIQUE AQUI</Link>
          para voltar até a página inicial
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
