import React from 'react';
import './App.css';
import OrderBuilder from "./containers/OrderBuilder/OrderBuilder";
import Receipt from "./containers/Receipt/Receipt";

function App() {
  return (
      <div className='container'>
          <h1 className='text-center'>Tea House</h1>
          <div className='row'>
              <OrderBuilder/>
              <Receipt/>
          </div>
      </div>
  );
}

export default App;
