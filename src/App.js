import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Name: {process.env.REACT_APP_TEST_KEY}</p>
      </header>
    </div>
  );
}

export default App;
