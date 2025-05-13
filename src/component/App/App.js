import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Bai1 from '../../BtProps/Bai1';
import { Dientich_hcn } from '../BT/Dientich_hcn';
import Method from '../BT/Method';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormBasic from '../BT/FormBasic';
import Diem_tb from '../BT/Diem_tb';
import Bed from '../Thoitrang/Bed';
import ThoiTrangNam from '../Thoitrang/ThoiTrangNam';
import ProductList from '../Thoitrang/ProductList';
import Food from '../Thoitrang/Food';
import Home from '../Router/Home';
import About from '../Router/About';
import Contact from '../Router/Contact';
import NoPage from '../Router/NoPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyRouter from '../MyRouter';
// import Item from 'Item';
// import State from 'State';
// import React, { Component } from 'react';

// function One() {
//   return (
//     <div>
//       <h1>One</h1>
//       <p>This is the One component.</p>
//     </div>
//   );
// }
function App() {
  return (
          <div >
          <BrowserRouter>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
              </ul>
            </nav>
            <hr />
            <MyRouter />
          </div>
        </BrowserRouter>

            {/* <State/> */}
            {/* <Header/> */}
            {/* this is content area */}
            {/* <Content/> */}
            {/* footer content */}
            {/* <Footer/> */}
            {/* <Dientich_hcn/> */}
            {/* <Method/> */}
            {/* <FormBasic/> */}
            {/* <Diem_tb/> */}
            {/* <Bed/> */}
            {/* <Food/> */}
            {/* <ThoiTrangNam/> */}
            {/* <ProductList/> */}
            
          </div>
          // <Bai1/>
        );
      }
    ;
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p style={{ color: 'red' , fontSize: '30px' }}>
    //       Hello PNV 
    //     </p>

    //     <div> 
    //       <One/>
    //     </div>

    //      <div> 
    //       <Four/>
    //     </div>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  // class Four extends Component {
  // render() {
  //   return (
  //     <div>
  //         <button>Day la vi du class</button>
  //     </div>
  //   )
  // }
  // }

export default App;
