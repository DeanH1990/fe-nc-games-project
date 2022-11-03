import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState("tickle122");
  

  return (
    <BrowserRouter>
    <UserContext.Provider value={user} >
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/reviews" element={<Reviews /> } />
            <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
        </div>
    </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
