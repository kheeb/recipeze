import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">

      </div>
    </Router>
  );
}

export default App;
