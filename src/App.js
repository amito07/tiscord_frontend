import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
