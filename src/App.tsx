import React from 'react';
import Homepage from './pages/Home/homepage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Auth0Provider} from '@auth0/auth0-react'
function App() {
  return (
   

  <Auth0Provider
  domain="dev-jska3woj.us.auth0.com"
  clientId="5liqBdgvsUB9IP6h52FNY3Cgz9No7rff"
  redirectUri={window.location.origin}
  >

<div className="App">
    <Homepage />
  </div>

</Auth0Provider>
  );
}

export default App;
