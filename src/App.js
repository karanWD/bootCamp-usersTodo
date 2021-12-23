import './App.css';
import ContextProvider from "./context/ContextProvider";
import Filter from "./components/Filter";
import AddBtn from "./components/AddBtn";
import TableContainer from "./components/TableContainer";
import "antd/dist/antd.css"

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Filter/>
        <AddBtn/>
        <TableContainer/>
      </ContextProvider>
    </div>
  );
}

export default App;
