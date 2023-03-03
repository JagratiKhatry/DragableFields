import React, {useEffect, useState} from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

export const ReactHookCheckbox = (props) => {
  const {
    options,
    label,
    row,
    name,
    control,
    rules,
    defaultSelection = [],
    setValue,
    error,
    onChangeHandler,
  } = props;

  const [selectedItems, setSelectedItems] = useState(defaultSelection);

  const handleSelect = (value, onChange) => {
    const isPresent = selectedItems.indexOf(value);
    let checkedItems = [];
    if (isPresent !== -1) {
      checkedItems = selectedItems.filter((item) => item !== value);
    } else {
      checkedItems = [...selectedItems, value];
    }
    setSelectedItems(checkedItems);
    onChange(checkedItems);
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <FormControl
      size={'small'}
      fullWidth
      variant='outlined'
      required={!!rules?.required} // !checkEmpty(rules?.required)
      {...(error && {
        error: (selectedItems && selectedItems.length) > 0 ? false : true,
      })}
    >
      <FormLabel component='legend' >{getLabel(label,!!rules?.required)}</FormLabel>
      <FormGroup row={row} name={name}>
        {options.map((option) => {
          return (
            <FormControlLabel
              key={option.id}
              label={option.label}
              control={
                <Controller
                  name={name}
                  control={control}
                  rules={rules}
                  render={({field: {onChange, value, ref}}) => (
                    <Checkbox
                      inputRef={ref}
                      key={option.id}
                      name={option.value}
                      checked={selectedItems.includes(option.value)}
                      onChange={(e) => {
                        handleSelect(option.value, onChange);
                        !!onChangeHandler && onChangeHandler(e);
                      }}
                    />
                  )}
                />
              }
            />
          );
        })}
      </FormGroup>
      {error && <FormHelperText error>{error?.message}</FormHelperText>}
    </FormControl>
  );
};
