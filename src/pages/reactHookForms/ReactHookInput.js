import React from 'react';
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

export const ReactHookInput = (props) => {
  const {
    name,
    control,
    rules,
    label,
    disabled,
    readOnly,
    startAdornment,
    endAdornment,
    helperText,
    hanldeIconClick,
    onChangeHandler,
    ...others
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value, ref}, fieldState: {error}}) => (
        <>
          <TextField
            fullWidth
            inputRef={ref}
            value={value || ''}
            onChange={(e) => {
              onChange(e);
              !!onChangeHandler && onChangeHandler(e);
            }}
            label={getLabel(label,!!rules?.required)}
            {...others}
            disabled={disabled}
            InputProps={{
              readOnly: readOnly,
              startAdornment:
                startAdornment &&
                (hanldeIconClick ? (
                  <InputAdornment position='start'>
                    <IconButton
                      aria-label='toggle start icon visibility'
                      onClick={hanldeIconClick}
                      // onMouseDown={handleMouseDownPassword}
                      edge='start'
                    >
                      {startAdornment}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <InputAdornment position='start'>
                    {startAdornment}
                  </InputAdornment>
                )),
              endAdornment:
                endAdornment &&
                (hanldeIconClick ? (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle end icon visibility'
                      onClick={hanldeIconClick}
                      // onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {endAdornment}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <InputAdornment position='end'>{endAdornment}</InputAdornment>
                )),
            }}
            helperText={helperText}
            error={!!error}
          />
          {error && <FormHelperText error>{error?.message}</FormHelperText>}
        </>
      )}
    />
  );
};
