import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';

function App() {

  const [id, setId] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/reviews" element={<Reviews id={id} setId={setId} /> } />
          <Route path="/reviews/:review_id" element={<SingleReview id={id} />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
