import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Routes />
      </div>
      <Footer />
    </>
  );
};

export default App;
