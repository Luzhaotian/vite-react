import { Form } from 'antd';

const App: React.FC = <T extends object = Record<string, unknown>>({ ...props }) => {
  return <Form<T> {...props}>{props.children}</Form>;
};

export default App;
