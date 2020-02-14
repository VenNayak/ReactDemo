import React from 'react';
import {List,ListItem,ListItemText, ListItemIcon} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const SideBar = ({routes}) => {

    return (

              <List component="nav">
                  {routes.map((item,index)=>{
                               return (
                               <ListItem button key={index} component={Link} to={item.path}>
                                   {item.icon ? <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>:null}
                                   <ListItemText primary = {item.name}/>
                               </ListItem>
                  );

                 })}
                  </List>
 


    );



}

export default SideBar;