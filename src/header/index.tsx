import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const pages = {
  Home: '/',
  Resume: '/resume',
  Widgets: '/widgets',
};

export default function Header() {
  return (
    <AppBar color="secondary" position="static" sx={{ mb: '1%' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
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

          <Stack direction="row" justifyContent="end" spacing={1} sx={{ flexGrow: 1 }}>
            {Object.entries(pages).map(([page, path]) => (
              <Button
                variant="contained"
                component={NavLink}
                to={path}
                color="primary"
              >
                {page}
                </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}