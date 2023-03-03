import {authRole} from 'shared/constants/AppConst';

export const getUserFromJwtAuth = (user) => {
  if (user)
    return {
      id: 1,
      uid: user._id,
      displayName: user.name,
      email: user.email,
      photoURL: user.avatar,
      role: authRole.User,
    };
  return user;
};
