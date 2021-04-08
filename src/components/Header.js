import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

//NEW Desktop NavBar
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  header: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: "0.6rem 3rem",
  },
  title: {
    flexGrow: 1,
  },
  linkGrid: {
    width: 350,
  },
  profile: {
    "&:hover": {
      opacity: 0.8,
    },
  },
  drawerContainer: {
    padding: "30px 30px",
  },
});

export default function Header() {
  const classes = useStyles();

  // DESKTOP SETUP
  const Content = () => {
    return (
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            Logo
          </Grid>
          <Grid item className={classes.linkGrid}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Link>Home</Link>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                classes={classes.profileBox}
                style={{ width: 130 }}
              >
                <p>Profile Photo</p>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };


  
  return (
    <header>
      <AppBar className={classes.header} position="static">
        <Content/>
      </AppBar>
    </header>
  );
}