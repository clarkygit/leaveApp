import { createContext, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import './App.css';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard/Dashboard';

import Login from './components/Login/Login';

export const userContext = createContext();

function App() {
  const location = useLocation(); {/* USED BY ROUTES */}
  
  const [user, setUser] = useState(null);
  const saveUser = (content) => {setUser(content)};

  return (
    <>
      <userContext.Provider value={{saveUser, user}}>
        <AnimatePresence mode="wait"> {/* ENABLES ANIMATION */}
          <Routes location={location} key={location.pathname}> {/* LOCATION & KEY ALSO ENABLES ANIMATION */}
              {/* <Route path="/" element={<Layout />}> */}
              <Route path="/" element={<Login />}></Route>
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Dashboard />} />
              </Route>
          </Routes>
        </AnimatePresence>
      </userContext.Provider>
    </>
  )
}

export default App
