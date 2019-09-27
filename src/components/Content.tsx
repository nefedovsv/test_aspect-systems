import * as React from "react";
import { IContent } from "../interfaces/index";
import { connect } from "react-redux";
//import { Button } from "antd";
export interface IStateModalProps {
  content: IContent;
}
class Content extends React.Component<IStateModalProps> {
  render() {
    const { content } = this.props;
    const array: any = [];

    Object.entries(content).forEach(([key, value]) => array.push(value));
    console.log(typeof array);
    return <div>hello</div>;
  }
}
const mapStateToProps = (store: any): IStateModalProps => ({
  content: store.content
});
export default connect<IStateModalProps, {}, {}>(mapStateToProps)(Content);
//value.type === "panel" && value.props.visible && <Button type="primary">Button</Button>
