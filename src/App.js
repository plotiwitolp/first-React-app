import "./App.css";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
};

export default App;
