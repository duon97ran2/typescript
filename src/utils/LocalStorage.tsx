import { UserType } from "../types/user"
export const authenticated = (data: UserType, next: () => void) => {
  localStorage.setItem("user", JSON.stringify(data));
  next();
}
export const isAuthenticate = () => {
  if (!localStorage.getItem("user")) return;
  return JSON.parse(localStorage.getItem("user") as string)
}