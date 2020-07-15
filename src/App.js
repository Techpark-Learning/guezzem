import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from "./components/layout"
import Board from "./components/board.js"

function App() {
  return (
    <Layout>
      <Board />
    </Layout>
  );
}

export default App;
