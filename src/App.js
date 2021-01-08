import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
