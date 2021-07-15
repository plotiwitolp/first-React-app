import "./App.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {

  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="content-wrapper">
      <Profile />
      {/* <Dialogs /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
