import {
  alpha,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {useLayoutContext} from '@xebia/utility/AppContextProvider/LayoutContextProvider';
import {HiAnnotation, HiOutlineAnnotation, HiPhone} from 'react-icons/hi';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#FFFFFFEB',
    borderBottomWidth: 'thin',
    marginBottom: '30px',
    marginTop: '5px',
  },
  button: {
    padding: '10px',
    px: '40px',
    backgroundColor: 'white',
  },
}));
export const LandingFooter = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 1102,
          boxShadow: 'none',
          backgroundColor: '#0D3C61',
          backgroundImage: (theme) =>
            `linear-gradient(${alpha(
              theme.palette.common.white,
              0.05,
            )}, ${alpha(theme.palette.common.white, 0.05)})`,
          color: '#FFFFFF',
          margin: '0',
          '& .footerContainer': {
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            padding: {xs: '5px 20px', md: '5px 32px', xl: '10px 32px'},
          },
        }}
        // {...rest}
      >
        <div className='footerContainer'>
          <Grid container sx={{textAlign: 'left'}} p={10} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={3} p={20}>
              <Box>
                <Stack>
                  <Typography component='h4' variant='h4' my={2}>
                    Administered
                  </Typography>
                  <Divider className={classes.divider} />
                  <img
                    src='/assets/images/Swil-logo-background.svg'
                    width='100%'
                    height='50%'
                    style={{alignSelf: 'center'}}
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} p={20}>
              <Box>
                <Stack>
                  <Typography component='h4' variant='h4' my={2}>
                    Important Link
                  </Typography>
                  <Divider className={classes.divider} />

                  <Typography component='h4'>
                    <Link href='#' style={{color: 'white'}}>
                      About the platform
                    </Link>
                  </Typography>

                  <Link href='#' style={{color: 'white'}}>
                    <Typography component='h4'>Help</Typography>
                  </Link>
                  <Link href='#' style={{color: 'white'}}>
                    <Typography component='h4'>Our services</Typography>
                  </Link>
                  <Link href='#' style={{color: 'white'}}>
                    <Typography component='h4'>Terms and conditions</Typography>
                  </Link>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} p={20}>
              <Box>
                <Stack>
                  <Typography component='h4' variant='h4' my={2}>
                    Subscribe
                  </Typography>
                  <Divider className={classes.divider} />
                  <form>
                    <Grid item xs={12} md={12} spacing={2}>
                      <TextField
                        name='subscribe'
                        placeholder='Subscribe For NewsLetter'
                        sx={{backgroundColor: 'white'}}
                        fullWidth
                      />
                    </Grid>
                    <br />
                    <Grid item xs={12} md={12} sx={{float: 'right'}}>
                      <Button
                        type='Submit'
                        className={classes.button}
                        variant='outlined'
                      >
                        Subscribe
                      </Button>
                    </Grid>
                  </form>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} p={20}>
              <Box>
                <Stack>
                  <Typography component='h4' variant='h4' my={2}>
                    Contact Us
                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <AddLocationAltOutlinedIcon />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography component='h4' variant='body1'>
                        Building a5, granada office, oasis
                        <br />
                        Eastern ring road, AI Suhada District
                        <br />
                        Riyadh, 123411
                        <br />
                        Saudi Arabia
                      </Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <AddIcCallOutlinedIcon />
                    </Grid>
                    <Grid item xs={10}>
                      9509509509
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Box
          sx={{
            marginLeft: '50px',
            marginRight: '50px',
            marginTop: '50px',
          }}
        >
          <Divider
            sx={{
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#FFFFFFEB',
              borderBottomWidth: 'thin',
              marginBottom: '10px',
              marginTop: '5px',
            }}
          />
          <Grid container sx={{textAlign: 'left'}} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={8} p={2}>
              <Typography component='h4' variant='h6' my={2}>
                © All rights reserved to Saudi Vision 2030 - Kingdom of Saudi
                Arabia 2022
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} p={2}  >
              <Typography component='h4' variant='h6' my={2} >
                Follow Us
              </Typography>
              <Box >
                <Link href='#' px={2} style={{color: 'white'}}>
                  <InstagramIcon />
                </Link>
                <Link href='#' px={2} style={{color: 'white'}}>
                  <SubscriptionsOutlinedIcon />
                </Link>
                <Link href='#' px={2} style={{color: 'white'}}>
                  <TwitterIcon />
                </Link>
                <Link href='#' px={2} style={{color: 'white'}}>
                  <FacebookOutlinedIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
