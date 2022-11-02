import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Reviews /> } />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
