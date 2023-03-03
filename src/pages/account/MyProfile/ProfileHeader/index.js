import React from 'react';
import Box from '@mui/material/Box';
import {Fonts} from 'shared/constants/AppEnums';
import EditIcon from '@mui/icons-material/Edit';
import IntlMessages from '@xebia/utility/IntlMessages';
import {Grid} from '@mui/material';
const ProfileHeader = ({editProfile}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: {xs: 'column', sm: 'row'},
        pb: 5,
        mb: 5,
        borderBottom: '1px solid #E5E4EA',
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Box
              component='h3'
              sx={{
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                fontSize: 18,
              }}
            >
              <IntlMessages id='common.myaccount' />
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box
              sx={{
                display: 'flex',
                float: 'right',
                cursor: 'pointer',
              }}
            >
              <Box
                xs={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  zIndex: 1,
                  border: `solid 2px ${(theme) =>
                    theme.palette.background.paper}`,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.7),
                  color: (theme) => theme.palette.primary.contrastText,
                  marginTop: '-10px',
                  borderRadius: '50%',
                  width: 26,
                  height: 26,
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  '& .MuiSvgIcon-root': {
                    fontSize: 16,
                  },
                }}
              >
                <EditIcon onClick={editProfile} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default ProfileHeader;
