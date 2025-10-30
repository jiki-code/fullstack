import React from 'react';
import {Toaster, toast} from 'sonner';
import {BrowserRouter, Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import UserList from './pages/UserList';


function App() {
  return (
    <>
    <Toaster richColors />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/user' element={<UserList />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App