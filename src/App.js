import "./App.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state}/>
                <div className="content-wrapper">
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
