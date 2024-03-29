import { SEND_USER } from "../constants/index";
import { SendUserAction } from "../interfaces/index";

export function sendUser(value1: string, value2: string): SendUserAction {
  return {
    type: SEND_USER,
    payload: { value1, value2 }
  };
}
