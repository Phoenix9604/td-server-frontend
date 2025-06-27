import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  Tabs,
  Tab,
  Box
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Calculators() {
  const [value, setValue] = useState(0);
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const handleChange = (event, newValue) => setValue(newValue);

  const calculateTax = () => {
    const taxableIncome = parseFloat(income);
    let calculatedTax = 0;
    
    if (taxableIncome > 1000000) {
      calculatedTax = taxableIncome * 0.3;
    } else if (taxableIncome > 500000) {
      calculatedTax = taxableIncome * 0.2;
    }
    
    setTax(calculatedTax);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Tax Calculators
        </Typography>
        
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Income Tax" />
          <Tab label="HRA Calculator" />
          <Tab label="Tax Savings" />
        </Tabs>
        
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Annual Income (₹)"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={calculateTax}
                sx={{ mt: 2 }}
              >
                Calculate Tax
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {tax !== null && (
                <Typography variant="h5" sx={{ mt: 2 }}>
                  Estimated Tax: ₹{tax.toFixed(2)}
                </Typography>
              )}
            </Grid>
          </Grid>
        </TabPanel>
      </CardContent>
    </Card>
  );
}