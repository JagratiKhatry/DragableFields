import {
  Autocomplete,
  CircularProgress,
  FormHelperText,
  TextField,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import { getLabel } from 'shared/constants/Utils';

const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const ReactHookAutocomplete = (props) => {
  const {
    name,
    control,
    rules,
    label,
    options = [],
    defaultSelection = null,
    setValue,
  } = props;
  const [open, setOpen] = useState(false);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const loading = open && autoCompleteOptions.length === 0;

  useEffect(() => {
    setValue(name, defaultSelection);
  }, []);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(500); // For demo purposes.

      if (active) {
        setAutoCompleteOptions([...options]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setAutoCompleteOptions([]);
    }
  }, [open]);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value, ref}, fieldState: {error}}) => {
        return (
          <>
            <Autocomplete
              id='mui-autocomplete'
              fullWidth
              open={open}
              ref={ref}
              value={options.find((option) => option.title === value) || ''} // {value || ''}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              onChange={(e) => {
                setValue(name, e?.target?.textContent);
                onChange(e?.target?.textContent);
                // !!onChangeHandler && onChangeHandler(e);
              }}
              isOptionEqualToValue={(option, value) => option.title === value}
              getOptionLabel={(option) => option && option.title}
              options={autoCompleteOptions}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={getLabel(label,!!rules?.required)}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress color='inherit' size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                  error={!!error}
                />
              )}
            />
            {error && <FormHelperText error>{error?.message}</FormHelperText>}
          </>
        );
      }}
    />
  );
};
