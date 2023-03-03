import {Button, FormControl, FormHelperText, Grid} from '@mui/material';
import {MuiList} from 'pages/reactMuiControls/MuiList';
import React, {useEffect, useState} from 'react';
import {Controller} from 'react-hook-form';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import {getLabel} from 'shared/constants/Utils';

export const ReactHookFileUpload = (props) => {
  const {
    name = 'uploadFiles',
    control,
    rules,
    label = 'Upload',
    files = [],
    disabled,
    startIcon,
    endIcon,
    multiple,
    accept = 'application/pdf,.png,.jpeg',
    setValue,
    // error,
    // uploadFileHandler,
    // removeFileHandler,
    // dowloadFileHandler,
  } = props;

  const [fileList, setFileList] = useState(files);

  const secondaryFileActions = [
    {
      id: 1,
      name: 'download',
      icon: <FileDownloadRoundedIcon color='primary' />,
      onClick: (name, data, index) => {
        console.log('api call => ', name, data, index);
      },
    },
    {
      id: 2,
      name: 'remove',
      icon: <ClearRoundedIcon color='primary' />,
      onClick: (e, data, index) => {
        const files = [...fileList.filter((e, i) => index !== i)];
        setFileList(files);
        setValue(name, files);
        // !!removeFileHandler && removeFileHandler(files)
      },
    },
  ];

  // useEffect(() => {
  //   setFileList([]);
  // }, [error]);

  const uploadFile = (e, onChange, error) => {
    e.preventDefault();
    const {files} = e.target;
    let filesList = [...files].map((e, i) => {
      return {
        id: fileList.length + i + 1,
        file: e,
        type: e.type,
        name: e.name,
        size: e.size,
      };
    });
    const updatedList = [...fileList, ...filesList];
    setFileList(updatedList);
    setValue(name, updatedList);
    onChange(updatedList);
    // !!uploadFileHandler && uploadFileHandler(updatedList)
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({field: {onChange, value, ref}, fieldState: {error}}) => {
            return (
              <FormControl error={!!error} fullWidth >
                <Button variant='contained' component='label' disabled={disabled}>
                  {getLabel(label, !!rules?.required)}
                  <input
                    type='file'
                    hidden
                    ref={ref}
                    multiple={multiple}
                    accept={accept}
                    onChange={(e) => {
                      uploadFile(e, onChange);
                    }}
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                  />
                </Button>
                {<FormHelperText error>{error?.message}</FormHelperText>}
              </FormControl>
            );
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <MuiList listItems={fileList} secondaryActions={secondaryFileActions} />
      </Grid>
    </Grid>
  );
};
