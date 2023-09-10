// import { Logo } from "../apps/mail/cmps/logo.jsx"
import {Search} from "../cmps/Search.jsx"

const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
        </Link>
     
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink> 
            {/* <Search /> */}
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
