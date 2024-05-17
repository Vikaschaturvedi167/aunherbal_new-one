import React from 'react';
import './App.css';
import Navbar from './comp/navbbar';
import { Route } from 'react-router-dom';
import AppRoutes from './Routes/AppRoute';
import FooterPage from './comp/Footer';

class App extends React.Component {
  handleContextMenu = (e) => {
    e.preventDefault();
  };
// onContextMenu={this.handleContextMenu}
  render() {
    return (
      <div className="App" >
        {/* <Navbar /> */}
        <Navbar/>
        <AppRoutes />
        <FooterPage />
      </div>
    );
  }
}

export default App;
