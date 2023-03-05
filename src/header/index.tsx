import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

const pages = {
  Home: '/',
  Resume: '/resume',
  'About Me': '/about',
}

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shahar Dahan
          </Typography>

          <Stack direction="row" justifyContent="end" sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            {Object.entries(pages).map(([page, path]) => (
              <NavLink to={path}>
                <MenuItem key={page}>{page}</MenuItem>
              </NavLink>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}