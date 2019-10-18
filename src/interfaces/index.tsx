import { SEND_USER } from "../constants/index";

export interface SendUserAction {
  type: typeof SEND_USER;
  payload: { value1: string; value2: string };
}

export interface IUserData {
  path: string;
  value: string;
  state: IStore;
}

export enum ElementType {
  panel = "panel",
  label = "label",
  button = "button"
}

export interface IProperty {
  width?: number;
  height?: number;
  visible: boolean;
  caption?: string;
}

export interface IElement {
  type: ElementType;
  props: IProperty;
  content?: IElement[];
}

export interface IStore {
  content: Array<IElement>;
  user: { value1: string; value2: string };
}
