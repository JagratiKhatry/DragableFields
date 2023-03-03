import React, { useEffect, useRef } from 'react';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';

const StyledSimpleBarReact = styled(SimpleBarReact)(() => ({
  height: '100%',
  width: '100%',
}));

const AppScrollbar = (props) => {
  const {children,scrollToTop, ...others} = props;
  const scrollableNodeRef = useRef(null);

  useEffect(()=>{
    if(scrollToTop){
      scrollableNodeRef.current.scrollTop=0
    }
  },[])

  return <StyledSimpleBarReact scrollableNodeProps={{ ref:scrollableNodeRef}} {...others}>{children}</StyledSimpleBarReact>;
};

export default AppScrollbar;

AppScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
