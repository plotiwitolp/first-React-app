import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="content-wrapper">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                </div>

                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
