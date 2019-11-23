import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Sidebar from '../Sidebar/Sidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import SidebarContent from '../SidebarContent/SidebarContent';
import RightSidebarContent from '../SidebarContent/RightSidebarContent';
import PayButton from '../PayButton/PayButton';
import Toolbar from '../Toolbar/Toolbar';
import SocialLinks from '../SocialLinks/SocialLinks';

import styles from './styles';
import CopyRight from '../CopyRight/CopyRight';

const { TITLE, DESCRIPTION } = require('../../../../variables');

class App extends Component {
  state = {
    drawerOpen: false,
    activeTab: '0',
  };
  handleDrawerToggle() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
  handleTabChange(value) {
    this.setState({ activeTab: value });
  }
  handleNavbarTitleClick() {
    window.location = '/';
  }
  handleShareClick() {
    if (navigator && navigator.share) navigator.share({
      title: TITLE,
      text: DESCRIPTION,
      url: window ? window.location.href : '',
    });
  }
  handleSidebarLinkClick() {
    if (this.state.drawerOpen) this.handleDrawerToggle();
  }
  render() {
    const { classes, children } = this.props;
    const { drawerOpen } = this.state;

    return <div>
      <Navbar title={TITLE} description={DESCRIPTION} onNavbarMenuClick={this.handleDrawerToggle.bind(this)} onNavbarTitleClick={this.handleNavbarTitleClick.bind(this)} />
      <Sidebar drawerOpen={drawerOpen} handleDrawerToggle={this.handleDrawerToggle.bind(this)}>
        <SidebarContent onLinkClick={this.handleSidebarLinkClick.bind(this)} />
      </Sidebar>
      <div className={classes.app}>
        <div className={classes.contentWrapper}>
          <Grid container spacing={0}>
            <Grid item sm={9} className={classes.content}>
              <Toolbar />
              <Content>
                <noscript><Typography style={{ textAlign: 'center' }} variant="h6">Please enable Javascript to continue.</Typography></noscript>
                {children}
              </Content>
              <Hidden smUp>
                <div style={{ margin: 10 }}>
                  <PayButton />
                  <SocialLinks />
                  <CopyRight />
                </div>
              </Hidden>
            </Grid>
            <Grid item sm={3} className={classes.sidebar}>
              <Hidden xsDown implementation="css">
                <RightSidebar>
                  <Toolbar />
                  <RightSidebarContent />
                </RightSidebar>
              </Hidden>
            </Grid>
          </Grid>
        </div>
      </div>
      <Fab className={classNames(classes.fab)} color={'primary'} onClick={this.handleShareClick} aria-label="share" name="share">
        <span className="hidden-accessiiblity">Share</span>
        <ShareIcon />
      </Fab>
    </div>;
  }
}

export default withStyles(styles, { withTheme: true })(App);