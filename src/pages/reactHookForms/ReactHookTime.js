import {FormHelperText, TextField} from '@mui/material';
import {LocalizationProvider, TimePicker} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

export const ReactHookTime = (props) => {
  const {name, control, rules, label, disabled, onChangeHandler} = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value, ref}, fieldState: {error}}) => (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label={getLabel(label,!!rules?.required)}
              value={value}
              disabled={disabled}
              name={name}
              onChange={(e) => {
                onChange(e);
                !!onChangeHandler && onChangeHandler(e);
              }}
              renderInput={(params) => (
                <TextField {...params} error={!!error} />
              )}
            />
          </LocalizationProvider>
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </>
      )}
    />
  );
};
