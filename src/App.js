import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/product";
import ProductData from "./data/data";
function App() {
  const [jsonData, setJsonData] = useState([]);
  const [finalArr, setFinalArr] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = ProductData;
      let updatedData = [];
      for (let i in data) {
        if (data[i].id) {
          const updatedField = { ...data[i], amount: "", checked: false };
          updatedData = [...updatedData, updatedField];
        }
      }
      setJsonData(updatedData);
    };
    getData();
  }, []);

  return (
    <div className="App ">
      <div className="app-content">
        <header className="App-header">
          <h2>LOAN</h2>
        </header>
        <Product
          jsonData={jsonData}
          setJsonData={setJsonData}
          setFinalArr={setFinalArr}
          finalArr={finalArr}
        />
      </div>
    </div>
  );
}

export default App;
