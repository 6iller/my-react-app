import './App.css';
import React from 'react';
import ThemeProvider from './components/ThemeWrapper/ThemeWrapper.tsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage.tsx';


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainPage />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
