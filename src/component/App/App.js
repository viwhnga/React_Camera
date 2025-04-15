import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
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
          <div id="container">
            <Header/>
            {/* this is content area */}
            <Content/>
            {/* footer content */}
            <Footer/>
          </div>
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
