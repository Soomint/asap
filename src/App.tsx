import { useState, useRef } from 'react'
import './App.css'
import { Input, Button, Burger, Menu } from './components';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyles } from './styles/globals';

import 'react-toastify/dist/ReactToastify.min.css';
import { Route, Routes } from 'react-router-dom';
import Subway from './pages/Subway';
import styled from 'styled-components';

const Body = styled.div`
  width: 1024px;
  height: auto;
  margin: 0 auto;
`;

function Main() {
  const [count, setCount] = useState(0);
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <div><Input /></div>
      <div>
        <Button>클릭</Button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <button onClick={notify}>Notify !</button>
      </div>
    </>
  )
}

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ToastContainer />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <Body>
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/subway" element={<Subway />} />
        </Routes> */}
        <Subway />
      </Body>
    </>
  )
}

export default App
