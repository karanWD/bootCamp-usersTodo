import React from "react"
import './App.css';
import "antd/dist/antd.css"
import Filter from "./components/Filter";
import TableContainer from "./components/TableContainer";
import ContextProvider from "./context/ContextProvider";

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Filter/>
                <TableContainer/>
            </ContextProvider>
        </div>
    );
}

export default App;
