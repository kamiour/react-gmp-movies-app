import React, { PropsWithChildren } from 'react';
// import './ErrorBoundary.scss';

type ErrorBoundaryProps = PropsWithChildren<{
  componentName: string;
}>;

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // to handle error using error and errorInfo
  }

  render() {
    const { componentName, children } = this.props;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2 className="error-boundary">Something went wrong with {componentName}!</h2>;
    }

    return children;
  }
}
