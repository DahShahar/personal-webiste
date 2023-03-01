import { Link } from 'react-router-dom';

export default function Header() {
    const path = window.location.pathname;

    return (
        <div className='header'>
            <Link className={(path === '/' ? 'active' : 'passive')} to="/">Home</Link>
            <Link className={(path === '/resume' ? 'active' : 'passive')} to="/resume">Resume</Link>
            <Link className={(path === '/about' ? 'active' : 'passive')} to="/about">About Me</Link>
        </div>
    )
}