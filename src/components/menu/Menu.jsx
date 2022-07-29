import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div className={styles.topnav}>
            <NavLink className={styles.topnavItem} to="/debounce" >Debounce</NavLink>
            <NavLink className={styles.topnavItem} to="/hover"    >Hover</NavLink>
            <NavLink className={styles.topnavItem} to="/request"  >Request</NavLink>
            <NavLink className={styles.topnavItem} to="/input"    >Input</NavLink>
            <NavLink className={styles.topnavItem} to="/scroll"   >Scroll</NavLink>
        </div>
    );
}
export default Menu;