import { useState, useEffect } from "react";
import MainComponent from "./MainComponent";
import SideComponent from "./SideComponent";
import SplashScreen from "./Splashscreen";
import ProductSearch from "./ProductSearch";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="bg-[#EAEAEA] min-h-screen flex">
      {/* Main Content */}
      <div className="w-2/3 bg-white p-4">
        <MainComponent />
      </div>

      {/* Side Content */}
      <div className="w-1/3 bg-gray-300 p-4">
        <SideComponent />
      </div>
    </div>
  );
};

export default App;
