import { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        setBtnIsHighlighted(true);

    }, []);
    
    return (
        <button className={btnClasses}>
            <span className={classes.icon}>
            </span>
            <span>Your Cart</span>
        </button>
    )
}

export default HeaderCartButton;