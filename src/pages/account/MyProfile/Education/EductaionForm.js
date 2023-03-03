import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AppGridContainer from '@xebia/core/AppGridContainer';
import Grid from '@mui/material/Grid';
import IntlMessages from '@xebia/utility/IntlMessages';
import PropTypes from 'prop-types';
import { Fonts } from 'shared/constants/AppEnums';
import { ReactHookInput } from 'pages/reactHookForms/ReactHookInput';
import { ReactHookDropdown } from 'pages/reactHookForms/ReactHookDropdown';
import { qualification } from 'shared/constants/Utils';
import { setProfileValues } from '../PersonalInfo/PersonalInfoForm';
import { Rules } from 'shared/constants/Validations';
const EductaionForm = (props) => {
    const {control,isEdit}=props
    const [qual, setQual] = useState()
    const onChangeQualification = (e) => {

        switch (e.target.value) {
            case 1:
                setQual('common.highSchoolName')
                break;
            case 2:
                setQual('common.institutionName')
                break;
            case 3:
                setQual('common.universityName')
                break;
            case 4:
                setQual('common.universityName')
                break;
            case 5:
                setQual('common.universityName')
                break;
            default:
                setQual('common.universityName')
                break;
        }
    }

    return (
        <>
            <Typography
                component='h3'
                sx={{
                    fontSize: 16,
                    fontWeight: Fonts.BOLD,
                    mb: { xs: 3, lg: 4 },
                }}
            >
                <IntlMessages id='common.educationInfo' />
            </Typography>
            <AppGridContainer spacing={4}>
                <Grid item xs={12} md={4}>
                    <ReactHookDropdown
                        control={control}
                        name='qualification'
                        label={<IntlMessages id='common.qualification' />}
                        options={qualification}
                        onChangeHandler={onChangeQualification}
                        rules={Rules().firstName}
                        disabled={isEdit}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ReactHookInput
                        control={control}
                        name='passingYear'
                        label={<IntlMessages id='common.passingYear' />}
                        rules={Rules().firstName}
                        disabled={isEdit}

                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ReactHookInput
                        control={control}
                        name='institutionName'
                        label={qual ? <IntlMessages id={qual} /> : <IntlMessages id='common.universityName' />}
                        rules={Rules().firstName}
                        disabled={isEdit}
                    />
                </Grid>
            </AppGridContainer>
        </>
    );
};

export default EductaionForm;
EductaionForm.propTypes = {
    setFieldValue: PropTypes.func,
    values: PropTypes.object,
};
