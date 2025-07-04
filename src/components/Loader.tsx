import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
    <ClipLoader />
  </div>
);

export default Loader;
