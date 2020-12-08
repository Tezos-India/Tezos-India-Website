import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import heroStyles from "./styles/Hero.module.css";
import logo from "../../assets/logo.png";
import darkTheme from '../../assets/dark-theme.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={heroStyles.appBarColor}>
        <Toolbar>
          <Hidden mdUp>
            <span className={heroStyles.appbarMagrinLeft}>
              <Button onClick={handleDrawerToggle}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                open={open}
                onClose={handleDrawerToggle}
                onOpen={handleDrawerToggle}
              >
                <List className={heroStyles.navHambergerWidth}>
                  <ListItem>Documentation</ListItem>
                  <ListItem>GitHub</ListItem>
                  <ListItem>
                    <Button className={heroStyles.mobileHeaderButton}>
                      Get in Touch
                    </Button>
                  </ListItem>
                </List>
              </SwipeableDrawer>
            </span>
          </Hidden>

          <Typography variant="h12" className={heroStyles.logoStyle}>
            <img className={heroStyles.headerImg} src={logo} alt="" />
          </Typography>
          <Hidden smDown>
            <span className={heroStyles.header}>
              <div className={heroStyles.headerLinks}>
              <Link to = "/">
                <ListItem><img src={darkTheme} alt=""/></ListItem>
                </Link>
                <ListItem>Documentation</ListItem>
                <ListItem>GitHub</ListItem>
                <ListItem>
                  <Button className={heroStyles.headerButton}>
                    Get in Touch
                  </Button>
                </ListItem>
              </div>
            </span>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
