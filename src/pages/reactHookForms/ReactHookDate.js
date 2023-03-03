import {FormHelperText, TextField} from '@mui/material';
import {DesktopDatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import {Controller} from 'react-hook-form';
import {getLabel} from 'shared/constants/Utils';
import { Rules, validateDate } from 'shared/constants/Validations';

export const ReactHookDate = (props) => {
  const {
    name,
    control,
    rules,
    variant = 'inline',
    label,
    disabled,
    minDate = new Date('01/01/1970'),
    maxDate = new Date(),
    shouldDisableDate,
    onChangeHanlder,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules && {
        ...Rules().required,
        validate: (value) => {
          return validateDate(value,minDate,maxDate);
        },
      }}
      render={({field: {onChange, value, ref}, fieldState: {error}}) => (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              disableToolbar
              disableMaskedInput
              inputVariant='outlined'
              variant={variant}
              label={getLabel(label, !!rules?.required)}
              inputFormat='dd/MM/yyyy'
              value={value || null}
              disabled={disabled}
              maxDate={maxDate}
              minDate={minDate}
              shouldDisableDate={shouldDisableDate}
              name={name}
              rifmFormatter={(value) =>
                value.replace(/[^[a-zA-Z0-9-]*$]+/gi, '')
              }
              onChange={(e) => {
                onChange(e) 
                !!onChangeHanlder && onChangeHanlder(e);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!error}
                  autoComplete={'off'}
                />
              )}
            />
          </LocalizationProvider>
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </>
      )}
    />
  );
};
