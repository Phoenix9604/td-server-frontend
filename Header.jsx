import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            TAXDIGIE
          </Typography>
          <nav>
            <Button 
              component={Link} 
              to="/file-itr"
              sx={{ color: 'white', mx: 1 }}
            >
              File ITR
            </Button>
            <Button 
              component={Link} 
              to="/calculators"
              sx={{ color: 'white', mx: 1 }}
            >
              Calculators
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}