import { useState } from 'react';
import { 
  Stepper, 
  Step, 
  StepLabel, 
  Box, 
  Button, 
  Typography,
  TextField,
  Paper
} from '@mui/material';

const steps = ['Personal Details', 'Income Details', 'Review & Submit'];

export default function ITR1() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Paper elevation={0} sx={{ p: 3, border: '1px solid #e0e0e0' }}>
      <Typography variant="h4" gutterBottom>
        File ITR-1 (Salaried Individuals)
      </Typography>
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="PAN Number"
            margin="normal"
            variant="outlined"
          />
        </Box>
      )}

      {activeStep === 1 && (
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Salary Income"
            margin="normal"
            variant="outlined"
            type="number"
          />
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleNext}
          color="primary"
        >
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Paper>
  );
}