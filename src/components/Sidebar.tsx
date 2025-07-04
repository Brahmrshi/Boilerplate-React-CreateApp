import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: Props) => (
  <Drawer open={open} onClose={onClose}>
    <List sx={{ width: 250 }} onClick={onClose}>
      <ListItem button component={Link} to="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/profile">
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
