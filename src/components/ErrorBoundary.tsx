import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Impucuzeko Festival Portal:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.clear();
      }
    } catch {
      // ignore
    }
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#1C1917] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white border border-[#E7E5E4] p-8 shadow-sm text-center space-y-4">
            <div className="text-2xl font-bold font-display text-[#1C1917]">
              Impucuzeko Maskandi Festival
            </div>
            <p className="text-sm text-[#57534E]">
              We encountered a display issue loading festival records.
            </p>
            <div className="pt-2">
              <button
                onClick={this.handleReset}
                className="px-6 py-2.5 bg-[#E36414] hover:bg-[#BF4A04] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reload Festival Portal
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
