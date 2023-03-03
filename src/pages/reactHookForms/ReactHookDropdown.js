import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const ReactHookDropdown = (props) => {
  const {
    options,
    name,
    control,
    rules,
    size,
    variant,
    disabled,
    label,
    multiple,
    onChangeHandler,
  } = props;

  const defaultValue = multiple ? [] : ''

  const generateDropdownOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option?.id} value={option.id}>
          {option.title}
        </MenuItem>
      );
    });
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, ref, value}, fieldState: {error}}) => (
        <FormControl
          fullWidth
          size={size}
          variant={variant}
          disabled={disabled}
          error={!!error}
        >
          <InputLabel id='react-hook-select' >{getLabel(label,!!rules?.required)}</InputLabel>
          <Select
            labelId='react-hook-select'
            inputRef={ref}
            value={value || defaultValue}
            label={label}
            multiple={multiple}
            onChange={(e) => {
              onChange(e);
              !!onChangeHandler && onChangeHandler(e);
            }}
            MenuProps={MenuProps}
          >
            {generateDropdownOptions()}
          </Select>
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
