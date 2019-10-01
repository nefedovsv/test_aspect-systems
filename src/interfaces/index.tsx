export const SEND_USER = "SEND_USER";
export interface SendUserAction {
  type: typeof SEND_USER;
  payload: { value1: string; value2: string };
}
// Интерфейсы для контента
export enum ElementType {
  panel = "panel",
  label = "label",
  button = "button"
}
export interface IProperty {
  width?: number;
  height?: number;
  caption?: string;
  visible: boolean;
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
