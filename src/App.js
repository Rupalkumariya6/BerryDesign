import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Agecal from './Agecalculator/Agecal';
import Main from "../src/Main"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/agecalculator" element={<Agecal />} />
          <Route path="/" element={<Main />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
