import classes from './Header.module.css';
import HeaderCartButton from '../Layout/HeaderCartButton';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
        </>
    );
};

export default Header;