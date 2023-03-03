import {Button, FormHelperText, Grid} from '@mui/material';
import React, {useState} from 'react';
import {MuiList} from './MuiList';

export const MuiFileUpload = (props) => {
  const {
    label = 'upload',
    name = 'uploadFiles',
    files = [],
    startIcon,
    secondaryActions = [],
    endIcon,
    multiple,
    accept = 'application/pdf,.png,.jpeg',
    uploadFile,
    error,
  } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Button startIcon={startIcon} endIcon={endIcon} component='label'>
          {label}
          <input
            type='file'
            hidden
            name={name}
            multiple={multiple}
            accept={accept}
            onChange={uploadFile}
            onClick={(event) => {
              event.target.value = null;
            }}
            // error={error}
            // disabled={disabled}
          />
        </Button>
        {!!error && <FormHelperText error>{error}</FormHelperText>}
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
        <MuiList listItems={files} secondaryActions={secondaryActions} />
      </Grid>
    </Grid>
  );
};
