import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeMode } from '../theme';
import { useAuth } from '../contexts/AuthContext';

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => {
  const { mode, toggleMode } = useThemeMode();
  const { logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Switch checked={mode === 'dark'} onChange={toggleMode} />
        <IconButton color="inherit" onClick={logout}>
          Logout
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
