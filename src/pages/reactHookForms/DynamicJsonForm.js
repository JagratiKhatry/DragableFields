import {Grid} from '@mui/material';
import React from 'react';
import {ReactHookCheckbox} from './ReactHookCheckbox';
import {ReactHookDropdown} from './ReactHookDropdown';
import {ReactHookInput} from './ReactHookInput';
import {ReactHookRadio} from './ReactHookRadio';
const DynamicJsonForm = (props) => {
  const {items, control, schema, setValue, errors} = props;
  const Input = ({e}) => {
    switch (e.fieldType) {
      case 'radio':
        return (
          <ReactHookRadio
            control={control}
            name={e.name}
            label={e.label}
            options={e.options}
            rules={e.validation}
            disabled={e.disabled}
          />
        );
      case 'select':
        return (
          <ReactHookDropdown
            control={control}
            name={e.name}
            label={e.label}
            options={e.options}
            rules={e.validation}
          />
        );
      case 'text':
        return (
          <ReactHookInput
            control={control}
            name={e.name}
            label={e.label}
            rules={e.validation}
            disabled={e.disabled}
          />
        );
      case 'number':
        return (
          <ReactHookInput
            control={control}
            name={e.name}
            label={e.label}
            rules={e.validation}
            type={e.fieldType}
            disabled={e.disabled}
          />
        );

      case 'checkbox':
        return (
          <ReactHookCheckbox
            control={control}
            name={e.name}
            label={e.label}
            options={e.options}
            rules={e.validation}
            setValue={setValue}
            row={e.row}
            errors={errors?.[e.name]}
          />
        );

      default:
        return null;
    }
  };

  const columnsCount = (n) => {
    switch (n) {
      case 1:
        return 12;
      case 2:
        return 6;
      case 3:
        return 4;
      case 4:
        return 3;
    }
  };
  return (
    <>
      {schema.map((sc) => {
        return (
          <Grid container spacing={4} key={sc.id} sx={{margin: '10px'}}>
            {sc.componentId.map((x, i) => {
              return (
                <React.Fragment key={i}>
                  {items
                    .filter((e) => e.id === x)
                    .map((e) => {
                      return (
                        <Grid item md={columnsCount(sc.columns)} key={e.id}>
                          <Input e={e} />
                        </Grid>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </Grid>
        );
      })}
    </>
  );
};
export default DynamicJsonForm;
