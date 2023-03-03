import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@xebia/utility/IntlMessages';
import AppAnimate from '@xebia/core/AppAnimate';
import EductaionForm from './Education/EductaionForm';
import PersonalInfoForm from './PersonalInfo/PersonalInfoForm';
import AppCard from '@xebia/core/AppCard';
import { Button, CircularProgress, Divider, Grid } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { onProfileUpdate} from 'redux/actions';
import AppMessageView from '@xebia/core/AppMessageView';
import { useNavigate } from 'react-router-dom';
import { UserTypes } from 'shared/constants/Enum';
const Account = () => {
  const data = JSON.parse(localStorage.getItem('data'))
  const user = data.result
  const { control, handleSubmit,reset} = useForm({
    mode: 'onChange', defaultValues: {
      firstName: user.firstName,
      familyName: user.familyName,
      fatherName: user.fatherName,
      grandfatherName: user.grandfatherName,
      firstNameEN: user.firstNameEN,
      fatherNameEN: user.fatherNameEN,
      familyNameEN: user.familyNameEN,
      grandfatherNameEN: user.grandfatherNameEN,
      emailId: user.emailId,
      mobileNumber: user.mobileNumber,
      region: user.region,
      city: user.city,
      address: user.address,
      qualification: user.qualification,
      passingYear: user.passingYear,
      institutionName: user.institutionName,
      identityNumber:user.identityNumber,
      nationality:user.nationality,
      hijriBirthDate:user.hijriBirthDate,
      gregorianBirthDate:user.gregorianBirthDate,
      gender:user.gender,
      age:user.age,
      maritalStatus:user.maritalStatus,
    }
  })
  const [errMessage, setErrMessage] = useState(null)
  const [successMessage, setSuccesMessage] = useState(null)
  const [isEdit,setIsEdit]=useState(true)
  const dispatch = useDispatch()
  const common = useSelector(({ common }) => common);
  useEffect(() => {
    setErrMessage(null)
    if (common?.data?.success) {
      console.log(common?.data?.result?.message)
      setSuccesMessage(common?.data?.result?.message)
      const updatedUser={result:{accessToken:UserTypes.accessToken ,refreshToken:user.refreshToken,...common?.data?.result?.updatedProfileDetails}}
      console.log(updatedUser)
      localStorage.setItem('data',JSON.stringify(updatedUser))
    }
    else if (common?.error) {
      setErrMessage(common?.error)
    }
  }, [common.data, common.error])
  const cancel = (data) => {
   reset({
    firstNameEN: data.firstNameEN,
    fatherNameEN: data.fatherNameEN,
    familyNameEN: data.familyNameEN,
    grandfatherNameEN:data.grandfatherNameEN,
    emailId: data.emailId,
    mobileNumber: data.mobileNumber,
    region: data.region,
    city: data.city,
    address: data.address,
    qualification: data.qualification,
    passingYear: data.passingYear,
    institutionName: data.institutionName,
    regionLookUpId: 12,
    cityLookUpId: 63})
  }
  const onSubmit = (data) => {
    console.log(data)
    let requestPayload = {
      params:{
      firstNameEN: data.firstNameEN,
      fatherNameEN: data.fatherNameEN,
      familyNameEN: data.familyNameEN,
      grandfatherNameEN:data.grandfatherNameEN,
      emailId: data.emailId,
      mobileNumber: data.mobileNumber,
      region: data.region,
      city: data.city,
      address: data.address,
      qualification: data.qualification,
      passingYear: data.passingYear,
      institutionName: data.institutionName,
      regionLookUpId: 12,
      cityLookUpId: 63}
    }
    dispatch(onProfileUpdate(requestPayload))
    setIsEdit(true)
  }
  const editProfile=()=>{
    setIsEdit(!isEdit)
  }
  return (
    <>
      {common?.error && <AppMessageView variant='error' message={errMessage} />}
      {common?.data?.success && <AppMessageView variant='success' message={successMessage} />}
      {common.loading && <CircularProgress/>}
      <AppAnimate animation='transition.slideUpIn' delay={200}>
     
        <AppCard
          sxStyle={{
            height: 1,
            position: "relative"
          }}
        >
          <ProfileHeader  editProfile={editProfile} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalInfoForm control={control} isEdit={isEdit}/>
            <Box
              xs={{
                margin: '100px'
              }}
            >
              <br />
              <Divider />
            </Box>
            <br />
            <EductaionForm control={control} isEdit={isEdit}/>
            <Grid item xs={12} md={12}>
              <br /> <br />
              {!isEdit&&<Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  float: "right"
                }}
              >
                <Button
                  sx={{
                    position: 'relative',
                    minWidth: 100,
                  }}
                  color='primary'
                  variant='contained'
                  type='submit'
                >
                  <IntlMessages id='common.saveChanges' />
                </Button>
                <Button
                  sx={{
                    position: 'relative',
                    minWidth: 100,
                    ml: 2.5,
                  }}
                  color='primary'
                  variant='outlined'
                  onClick={cancel}
                >
                  <IntlMessages id='common.cancel' />
                </Button>
              </Box>}
            </Grid>
          </form>
        </AppCard>
      </AppAnimate>
    </>
  );
};

export default Account;
