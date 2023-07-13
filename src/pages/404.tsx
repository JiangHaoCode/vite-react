import { Button, Result } from "antd";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不住，没找到页面"
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default NotFound;
