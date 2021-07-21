import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (

    <header className={s.header}>
        <NavLink to="/profile" className={s.home}>  <img src="https://svgsilh.com/svg/1294579-2196f3.svg" />
        </NavLink>
    </header>

  );
};

export default Header;