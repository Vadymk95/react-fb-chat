import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <AppBar color={'secondary'} position="static">
      <Toolbar variant={'dense'}>
        <Grid container justifyContent={'flex-end'}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={'outlined'}>Logout</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={'outlined'}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
