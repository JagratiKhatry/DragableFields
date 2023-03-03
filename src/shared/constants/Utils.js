import IntlMessages from '@xebia/utility/IntlMessages';
import {HmacSHA256} from 'crypto-js';
import { zeroPad } from 'react-countdown';

export const nationalities = [
  {id: '10', title: <IntlMessages id='common.saudi' />},
  {id: '11', title: <IntlMessages id='common.nonSaudi' />},
];

export const qualification=[
  {id:1,title:"High School"},
  {id:2,title:"Diploma"},
  {id:3,title:"Bachelor’s"},
  {id:4,title:"Master"},
  {id:5,title:"Ph.D."},


]
export const dynamicDropdownList = (
  type,
  loopFrom = new Date().getFullYear() - 694,
  loopTo = new Date().getFullYear() - 579,
) => {
  var start = loopFrom;
  var end = loopTo;
  var fieldName = [];
  while (start <= end) {
    var current = type === 'desc' ? end-- : start++;
    fieldName.push({id: current, title: current});
  }
  return fieldName;
};

export const years = dynamicDropdownList('desc');
export const months = dynamicDropdownList(null, 1, 12);
export const dates = dynamicDropdownList(null, 1, 30);

export const encryptPassword = (password) => {
  return HmacSHA256(password, process.env.REACT_APP_SHA_KEY).toString();
};

export const timerRenderer = ({minutes, seconds}) => {
  return (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
};

export const getLabel = (label,isRequired) => {
  return label && isRequired ? <>{label}<span><IntlMessages id='common.*'/></span></> : label;
}

export const FormatSize = (value, sizeFormat = 'MB') => {
  switch (sizeFormat.toUpperCase()) {
    case 'MB':
      return `${(value / (1024 * 1024)).toFixed(2)} ${sizeFormat}`;
    case 'GB':
      return `${(value / (1024 * 1024 * 1024)).toFixed(2)} ${sizeFormat}`;
    default:
      return `${(value / 1024).toFixed(2)} ${sizeFormat}`;
  }
};


export const questionnaireRadioOptions = [
  {id: 1, title: <IntlMessages id='common.yes' />},
  {id: 2, title: <IntlMessages id='common.no' />},
]


// to be removed later
export const questionnaire = [
  {
    id: 1,
    desc: <IntlMessages id='ORC.questionnaire.q1' />,
  },
  {
    id: 2,
    desc: <IntlMessages id='ORC.questionnaire.q2' />,
  },
  {
    id: 3,
    desc: <IntlMessages id='ORC.questionnaire.q3' />,
  },
  {
    id: 4,
    desc: <IntlMessages id='ORC.questionnaire.q4' />,
  },
  {
    id: 5,
    desc: <IntlMessages id='ORC.questionnaire.q5' />,
  },
];