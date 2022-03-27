import instance from "./instance";
import { UserType } from "../types/user";

export const register = (post: UserType) => {
  const url = "/register";
  return instance.post(url, post);
}
export const login = (post: UserType) => {
  const url = "/login";
  return instance.post(url, post);
}