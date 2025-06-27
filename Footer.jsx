import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto' }}>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} TaxDigie. Partnered with Income Tax Department of India.
      </Typography>
    </Box>
  );
}