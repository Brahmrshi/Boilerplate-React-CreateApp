import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Line } from 'react-chartjs-2';
import { useDropzone } from 'react-dropzone';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
];

const rows = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const chartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Example',
      data: [3, 2, 5],
      borderColor: '#0057b7',
    },
  ],
};

const Dashboard = () => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title="Data Grid" />
            <CardContent sx={{ height: 240 }}>
              <DataGrid rows={rows} columns={columns} hideFooter />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title="Chart" />
            <CardContent>
              <Line data={chartData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }} {...getRootProps()}>
            <CardHeader title="File Upload" />
            <CardContent>
              <input {...getInputProps()} />
              <Typography variant="body2" sx={{ mb: 1 }}>
                Drag 'n' drop files here, or click to select files
              </Typography>
              {acceptedFiles.map((file) => (
                <Typography key={file.name}>{file.name}</Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title="Text Editor" />
            <CardContent>
              <CKEditor editor={ClassicEditor} data="" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
