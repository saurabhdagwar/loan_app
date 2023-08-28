import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/product";
// import ProductData from "./data/data";
function App() {
  const [jsonData, setJsonData] = useState([]);
  const [finalArr, setFinalArr] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = [
        {
          category_name: "Home Loan",
          id: 1,
          threshold: 10,
        },
        {
          category_name: "Loan Against property",
          id: 2,
          threshold: 10,
        },
        {
          category_name: "Personal Loan",
          id: 3,
          threshold: 10,
        },
        {
          category_name: "Business loan",
          id: 4,
          threshold: 10,
        },
        {
          category_name: "Life Insurance",
          id: 10,
          threshold: 10,
        },
        {
          category_name: "Health Insurance",
          id: 11,
          threshold: 10,
        },
        {
          category_name: "General Insurance",
          id: 12,
          threshold: 10,
        },
      ];
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
