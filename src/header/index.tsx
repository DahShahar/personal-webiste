import './header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="logo">Shahar Dahan</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </div>
  );
}