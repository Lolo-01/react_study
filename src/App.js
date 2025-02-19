import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; //router 

import 선택 from './page/choose';
import 계산기 from './page/계산기';
import Div1  from './page/div1';
import Div2  from './page/div2';
import Div3  from './page/div3';
import Div4  from './page/div4';
import Div5  from './page/div5';
import Div6  from './page/div6';
import 성적  from './page/student';
import 다크모드  from './page/darkmode';
import Axios  from './axios/연습1';
import Axios2  from './axios/연습2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <헤더 />
        <Routes>
          <Route path={"/"} element={<선택 />}></Route>
          <Route path={"/calc"} element={<계산기 />}></Route>
          <Route path={"/div1"} element={<Div1  />}></Route>
          <Route path={"/div2"} element={<Div2  />}></Route>
          <Route path={"/div3"} element={<Div3  />}></Route>
          <Route path={"/div4"} element={<Div4  />}></Route>
          <Route path={"/div5"} element={<Div5  />}></Route>
          <Route path={"/div6"} element={<Div6  />}></Route>
          <Route path={"/stu"} element={<성적  />}></Route>
          <Route path={"/dark"} element={<다크모드  />}></Route>
          <Route path={"/axios"} element={<Axios  />}></Route>
          <Route path={"/axios2"} element={<Axios2  />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

 function 헤더() {
  const movePage = useNavigate();
  return (
    <div>
      <h1
        style={{
          cursor: 'pointer'
        }}
        onClick={
          () => movePage('/')
        }
      >Home으로 이동</h1>
    </div>

  );
}

export default App;
