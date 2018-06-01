import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { SubmitDataContainer, SubmitDataInner } from './styles';

const SubmittingData = () => (
  <SubmitDataContainer>
    <SubmitDataInner>
      <Typography variant="display1" gutterBottom>
        Please wait...
      </Typography>
      <CircularProgress />
    </SubmitDataInner>
  </SubmitDataContainer>);


export default SubmittingData;
