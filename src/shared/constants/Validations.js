import IntlMessages from '@xebia/utility/IntlMessages';
import {FormatSize} from './Utils';

const EmailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegExp = /^\d{10}$/;
const cardNumberRegExp = /^\d{12}$/;

export const Rules = (watch = null) => {
  return {
    required: {required: <IntlMessages id='common.isRequired' />},
    identityRules: {
      nationality: {required: <IntlMessages id='common.isRequired' />},
      nationalId: {
        required: <IntlMessages id='common.isRequired' />,
        pattern: {
          value: /^[0-9]{10}$/,
          message: 'National ID format is invalid',
        },
      },
      date: {required: <IntlMessages id='common.isRequired' />},
      month: {required: <IntlMessages id='common.isRequired' />},
      year: {required: <IntlMessages id='common.isRequired' />},
    },
    email: {
      required: <IntlMessages id='common.isRequired' />,
      pattern: {value: EmailRegExp, message: 'Email format is not valid'},
    },
    firstName: {
      required: <IntlMessages id='common.isRequired' />,
    },
    fatherName: {
      required: <IntlMessages id='common.isRequired' />,
    },
    grandFatherName: {
      required: <IntlMessages id='common.isRequired' />,
    },
    dobInHijri: {
      required: <IntlMessages id='common.isRequired' />,
    },
    dobInGregorian: {
      required: <IntlMessages id='common.isRequired' />,
    },
    martialStatus: {
      required: <IntlMessages id='common.isRequired' />,
    },
    phoneNumber: {
      required: <IntlMessages id='common.isRequired' />,
      pattern: {value: phoneNumberRegExp, message: 'Phone Number is not valid'},
    },
    gender: {
      required: <IntlMessages id='common.isRequired' />,
    },
    password: {
      required: <IntlMessages id='common.isRequired' />,
    },
    confirmPassword: {
      required: <IntlMessages id='common.isRequired' />,
      validate: (value) => {
        const password = watch('password');
        return validatePassword(password, value);
      },
    },
    cardNumber: {
      required: <IntlMessages id='common.isRequired' />,
      pattern: {value: cardNumberRegExp, message: 'Phone Number is not valid'},
    },
    cardExpDate: {
      required: <IntlMessages id='common.isRequired' />,
      validate: (value) => {
        return validateCardExpDate(value);
      },
    },
  };
};

const validatePassword = (password, cPassword) => {
  if (password !== cPassword) {
    return 'passwor does not match';
  }
};

export const validateDate = (value, minDate, maxDate) => {
  const inputDate = new Date(value);
  if (value.toString() === 'Invalid Date') {
    return 'Invalid Date';
  }
  if (minDate) {
    const minDt = new Date(minDate);
    if (minDt.getTime() > inputDate.getTime()) {
      return `Expiry date cannot be before ${minDt.toLocaleDateString()}`;
    }
  }

  if (maxDate) {
    const maxDt = new Date(maxDate);
    if (maxDt.getTime() < inputDate.getTime()) {
      return `Expiry date cannot be after ${maxDt.toLocaleDateString()}`;
    }
  }
  return true;
};

export const validateCardExpDate = (value) => {
  const today = new Date();
  const inputDate = new Date(value);
  let message = true;
  if (today.getTime() > inputDate.getTime()) {
    message = 'Expiry date cannot be a past date.';
  }
  return message;
};

export const ValidateFiles = (files, options) => {
  const {
    maxFileSize = 1024 * 1024,
    sizeFormat = 'MB',
    maxFilesCount = 5,
    validFileType = 'application/pdf', // 'image/png', 'text/plain', 'application/pdf'
  } = options;

  const filesArr = Object.values(files);
  console.log(filesArr);
  let message = true;
  if (filesArr.length > maxFilesCount) {
    message = `Maximum ${maxFilesCount} files allowed`;
    return message;
  }
  filesArr?.forEach((file) => {
    if (file?.type !== validFileType) {
      message = `Invalid file type, only ${validFileType} format accepted`;
      return message;
    } else if (file?.size > maxFileSize) {
      message = `File size should not exceed ${FormatSize(
        maxFileSize,
        sizeFormat,
      )}`;
      return message;
    }
  });
  return message;
};

// export const ValidateConditions = (value, Conditions) => {
//   let message = true;
//   if (Conditions.length !== value.length) {
//     message = 'Please check all above T & C';
//   }
//   return message;
// };
