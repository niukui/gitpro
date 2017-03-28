import {AsyncStorage} from 'react-native';

const USER_PROFILE_STORAGE_KEY = 'CoPHRState:UserProfile';

export function getUserProfile() {
  return AsyncStorage.getItem(USER_PROFILE_STORAGE_KEY);
}

export async function setUserProfile(user) {
  return AsyncStorage.setItem(USER_PROFILE_STORAGE_KEY, user);
}

export async function clearUserProfile() {
  return AsyncStorage.removeItem(USER_PROFILE_STORAGE_KEY);
}
