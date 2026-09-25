import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;