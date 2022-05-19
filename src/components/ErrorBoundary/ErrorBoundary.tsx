import React, { PropsWithChildren } from 'react';
import './ErrorBoundary.scss';

type ErrorBoundaryProps = PropsWithChildren<{
  componentName: string;
}>;

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // to handle error using error and errorInfo
  }

  render() {
    const childComponentName = this.props.componentName;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h2 className="error-boundary">Something went wrong with {childComponentName}!</h2>;
    }

    return this.props.children;
  }
}
