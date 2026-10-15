import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center p-8" style={{ background: "#f2f0e9", color: "#171816" }}>
          <div className="flex w-full max-w-2xl flex-col items-start gap-4">
            <AlertTriangle size={36} />
            <h1 className="font-serif text-3xl">这一页没有排完。</h1>
            <p>阅读时遇到了程序错误。刷新之后如果还在，把下面的记录留给编辑。</p>
            <pre className="w-full overflow-auto whitespace-pre-wrap text-sm" style={{ background: "#e5e0d5", padding: 16 }}>
              {this.state.error?.stack}
            </pre>
            <button type="button" className="ink-button" onClick={() => window.location.reload()}>
              <RotateCcw size={16} /> 重新打开
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
