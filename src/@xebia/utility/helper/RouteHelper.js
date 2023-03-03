export const checkPermission = (routeRole, userRole) => {
  if (!routeRole || routeRole.length === 0) {
    return true;
  } else {
    if (Array.isArray(routeRole)) {
      return Array.isArray(userRole)
        ? routeRole.some((r) => userRole.indexOf(r) >= 0)
        : routeRole.indexOf(userRole) >= 0;
    } else {
      return Array.isArray(userRole)
        ? userRole.indexOf(routeRole) >= 0
        : routeRole === userRole;
    }
  }
};
