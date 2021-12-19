import React from "react"
import './App.css';
import "antd/dist/antd.css"
import Filter from "./components/Filter";
import TableContainer from "./components/TableContainer";
import ContextProvider from "./context/ContextProvider";
import AddBtn from "./components/AddBtn";

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
