import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import clsx from 'clsx';

export default function AuthNav() {
    return (
        <header>
            <NavLink to="/register" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive);
            }}>
                Register
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => {
                return clsx(css.link, isActive && css.isActive);
            }}>
                Log In
            </NavLink>
        </header>
    );
}