import React from 'react';
import { Button } from '@mui/material';

export interface ExampleButtonProps {
  label: string;
  onClick?: () => void;
}

const ExampleButton = ({ label, onClick }: ExampleButtonProps) => (
  <Button variant="contained" onClick={onClick}>
    {label}
  </Button>
);

export default ExampleButton;
