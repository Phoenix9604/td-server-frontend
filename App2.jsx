import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import ITR1 from './pages/FileITR/ITR1';
import TaxCalculator from './pages/Calculators';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <main style={{ minHeight: '80vh', padding: '24px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/file-itr/itr1" element={<ITR1 />} />
            <Route path="/calculators" element={<TaxCalculator />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;