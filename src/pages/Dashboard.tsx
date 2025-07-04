import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
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
      <Typography variant="h5" gutterBottom>
        Data Grid
      </Typography>
      <Paper sx={{ height: 200, mb: 4 }}>
        <DataGrid rows={rows} columns={columns} hideFooter />
      </Paper>

      <Typography variant="h5" gutterBottom>
        Chart
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }}>
        <Line data={chartData} />
      </Paper>

      <Typography variant="h5" gutterBottom>
        File Upload
      </Typography>
      <Paper sx={{ p: 2, mb: 4 }} {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop files here, or click to select files</p>
        {acceptedFiles.map((file) => (
          <Typography key={file.name}>{file.name}</Typography>
        ))}
      </Paper>

      <Typography variant="h5" gutterBottom>
        Text Editor
      </Typography>
      <Paper sx={{ p: 2 }}>
        <CKEditor editor={ClassicEditor} data="" />
      </Paper>
    </Box>
  );
};

export default Dashboard;
