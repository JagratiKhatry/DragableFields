import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

export const ReactHookRadio = (props) => {
  const {options, name, control, rules, label, disabled, onChangeHandler} =
    props;

  const generateRadioOptions = () => {
    return options.map((option) => {
      return (
        <FormControlLabel
          key={option.id}
          disabled={disabled}
          value={option.id}
          label={option.title}
          control={<Radio />}
          labelPlacement="start"
        />
      );
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: {onChange, value},
        fieldState: {error},
      }) => (
        <FormControl
          error={!!error}
        >
          <FormLabel>{getLabel(label,!!rules?.required)}</FormLabel>
          <RadioGroup
            row
            value={value || ''}
            onChange={(e) => {
              onChange(e);
              !!onChangeHandler && onChangeHandler(e);
            }}
          >
            {generateRadioOptions()}
          </RadioGroup>
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
