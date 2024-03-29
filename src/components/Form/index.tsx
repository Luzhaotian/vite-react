import { Form } from "antd";

const App: React.FC = <T extends object = any>({ ...props }) => {
  return <Form<T> {...props}>{props.children}</Form>;
};

export default App;
