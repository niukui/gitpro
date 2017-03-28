import {get} from './../utils/api';

export async function getAuthentication(username, password) {
  // simulate an asynchronous operation
  return get(`Authentication?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`).then((data) => {
    return data;
  });
}
