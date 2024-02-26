import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("envvvv", process.env); // Add this line temporarily
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {process.env.REACT_APP_TEST_KEY}</p>
        <p>public: {process.env.APPSETTING_REACT_APP_TEST_KEY}</p>
      </header>
    </div>
  );
}

export default App;
