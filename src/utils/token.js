import jwtDecode from "jwt-decode"

export const isTokenValid = (token) => {
  const decoded = jwtDecode(token);

  if (typeof decoded.exp === 'undefined')
    return false;

  if (decoded.exp < new Date().getTime() / 1000)
    return false;

  return true;
}