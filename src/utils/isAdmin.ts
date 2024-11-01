export function userIsAdmin() {
  if (typeof window !== 'undefined') {
    const role = window.localStorage.getItem('role');
    if (role === '1') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
