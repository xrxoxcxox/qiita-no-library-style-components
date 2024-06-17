import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TestComponent1 } from "./components/TestComponent1";
import { TestComponent2 } from "./components/TestComponent2";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <TestComponent1 color="red"></TestComponent1>
      <TestComponent1 color="blue"></TestComponent1>
      <TestComponent2 color="red"></TestComponent2>
      <TestComponent2 color="blue"></TestComponent2>
      <p>This is not a test component</p>
    </>
  );
}

export default App;
