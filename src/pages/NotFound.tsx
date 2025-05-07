
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center p-8 max-w-lg">
        <div className="mb-6">
          <div className="text-8xl font-bold text-primary">404</div>
          <div className="text-4xl font-medium mt-2">Page Not Found</div>
        </div>
        <p className="text-xl text-muted-foreground mb-8">
          We couldn't find the page you're looking for. The URL might be misspelled or the page may have been removed.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Dashboard</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
