import React from 'react';
import { 
    AppBar,
    Toolbar,
    Button 
} from '@material-ui/core'
import { NavbarStyles } from '../../styles/Navbar';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const styles = NavbarStyles()

    return (
        <div>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Button 
                        className={styles.title}
                        variant="text" 
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Titulo pagina
                    </Button>
                    <Button 
                        variant="text" 
                        color="inherit"
                        component={Link}
                        to="/login"
                    >
                        Login
                    </Button>
                    <Button 
                        variant="text" 
                        color="inherit"
                        component={Link}
                        to="/registro"
                    >
                        Registro
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={styles.offset}></div>
        </div>
    )
}

export default Navbar;