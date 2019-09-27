export const SEND_USER = "SEND_USER";

export interface IUser {
  user: string;
}

export interface SendUserAction {
  type: typeof SEND_USER;
  payload: string;
}

// Интерфейсы для контента

export interface IProperty {
  width?: number;
  height?: number;
  caption?: string;
  visible: boolean;
}

export interface IElement {
  type: string;
  props: IProperty;
}

export interface IContent {
  content: Array<IElement>;
}

export type IStore = IContent & IUser;
