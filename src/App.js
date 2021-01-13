import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header';
import Banner from './components/layout/Banner';
import Page from './components/layout/Page';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Page />
        <Banner />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
