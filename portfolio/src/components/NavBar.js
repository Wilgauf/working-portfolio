import React from 'react'
import {AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container} from "@material-ui/core"
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
      },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const NavBar =(props) => {
    const navItems = [
        {title:"About me", path:"/about-me"},
        {title:"Projects", path:"/projects"},
        {title:"Resume", path:"/resume"},
        {title:"Contact", path:"/contact"},

    ]
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar> 
                    <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                        <IconButton edge='start' color = 'inherit' aria-label='home'>
                            <SportsVolleyballIcon fontSize='large'/>
                        </IconButton>
                        <List aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navItems.map((item)=> (
                                <a href={item.path} key={item.title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={item.title}/>
                                </ListItem>
                                </a>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default NavBar;

