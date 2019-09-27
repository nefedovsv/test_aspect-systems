import { SEND_USER, SendUserAction } from "../interfaces/index";

export function sendUser(newUser: string): SendUserAction {
  return {
    type: SEND_USER,
    payload: newUser
  };
}
