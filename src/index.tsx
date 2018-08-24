import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/index.scss";
interface Props {
  welcome: string;
}

const App = ({ welcome }: Props) => <div>{welcome}</div>;

ReactDOM.render(<App welcome="Hello TypeScript" />, document.getElementById(
  "root"
) as HTMLElement);
