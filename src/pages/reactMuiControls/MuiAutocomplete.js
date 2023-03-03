import {Autocomplete, CircularProgress, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';

const sleep = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const MuiAutocomplete = (props) => {
  const {label, options = []} = props;
  const [open, setOpen] = useState(false);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);
  const loading = open && autoCompleteOptions.length === 0;

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
    <Autocomplete
      id='mui-autocomplete'
      fullWidth
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={autoCompleteOptions}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label} // 'Asynchronous'
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
        />
      )}
    />
  );
};
