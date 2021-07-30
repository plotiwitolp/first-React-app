import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
        return (
            <header className={s.header}>
                <NavLink to="/profile" className={s.home}> <img src="https://svgsilh.com/svg/1294579-2196f3.svg"
                                                                alt=""/></NavLink>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div> {props.login} - <button onClick={props.logout} id={"btnLogout"}> Log out</button></div>
                        : <NavLink to={"/login"}>login</NavLink>}
                </div>
            </header>

        );
    }
;

export default Header;