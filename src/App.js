import "./App.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import React from "react";


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state}/>
        <div className="content-wrapper">
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} addMyMessage={props.addMyMessage}/>} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path="/news" render={() => <News/>} />
          <Route path="/music" render={() => <Music/>} />
          <Route path="/settings" render={() => <Settings/>} />



          {/*<Route path="/dialogs" component={Dialogs} />*/}
          {/*<Route path="/profile" component={Profile} />*/}
          {/*<Route path="/news" component={News} />*/}
          {/*<Route path="/music" component={Music} />*/}
          {/*<Route path="/settings" component={Settings} />*/}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
