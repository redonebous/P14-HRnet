import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { UsersProvider } from './hook/UsersContext';

function App() {
  return (
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>

  )
}

export default App;
