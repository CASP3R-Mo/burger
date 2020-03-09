import React from 'react';
import Aux from '../../HOC/hoc';
import classes from './Layout.module.css';
const layout = props => {
  return (
    <Aux>
      <div> Toolbar,SideDrawer,Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};
export default layout;
