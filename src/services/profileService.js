import {get} from './../utils/api';

export async function getProfile(username) {
  // simulate an asynchronous operation
  return get(`UserProfile?username=${encodeURIComponent(username)}`);
}
