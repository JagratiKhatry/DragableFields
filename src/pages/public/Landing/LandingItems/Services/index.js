import React from 'react';
import AppCard from '@xebia/core/AppCard';
import Box from '@mui/material/Box';
import {Fonts} from 'shared/constants/AppEnums';
import PropTypes from 'prop-types';
import {Button} from '@mui/material';

const CourseCategories = ({course}) => {
  const {image, title, desc} = course;
  return (
    <AppCard sxStyle={{height: 1, borderRadius:"3px",  textAlign:"center"}} contentStyle={{padding: 8, }}>
      <Box sx={{width:300, height: 300}}>
        <img src={image} alt={title} />
      </Box>
      <Box
        sx={{
          px: 4,
          pt: 3,
        }}
      >
        <Box
          component='h5'
          sx={{
            mb: 1,
            fontSize: 16,
            fontWeight: Fonts.BOLD,
          }}
        >
          {title}
        </Box>
        <Box
          component='p'
          sx={{
            mb: 4,
            color: 'text.secondary',
          }}
        >
          {desc}
        </Box>
        <Box>
          <Button>Go to Service</Button>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CourseCategories;

CourseCategories.propTypes = {
  course: PropTypes.object,
};
