import { NavLink } from "react-router-dom"
import classes from './MainHeader.module.css'

const MainHeader = () => {
    const activeLinkClass = (navData) => {
        return navData.isActive ? classes.active : ''
    }
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/welcome" className={activeLinkClass}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={activeLinkClass}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;