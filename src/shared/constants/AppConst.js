export const authRole = {
  Admin: ['admin'],
  User: ['user', 'admin'],
};

export const RoutePermittedRole = {
  Admin: 'admin',
  User: 'user',
};
export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};

export const OTP_TYPE = {
  SIGN_UP:1,
  SIGN_IN:2,
  FORGOT_PASSWORD:4,
}

export const USER_TYPE_LOOKUP_ID = {
  SIGN_UP:null,
  SIGN_IN:25,
  FORGOT_PASSWORD:null,
}

export const authorizedInitialUrl = '/dashboard';
export const unauthorizedInitialUrl = '/home';
