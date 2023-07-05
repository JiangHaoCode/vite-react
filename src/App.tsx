// import React from "react";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const App: React.FC<{}> = () => {
  const navigate = useNavigate();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `index`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `About`,
      children: `Content of Tab Pane 2`,
    },
  ];

  const onChange = (key: string) => {
    if (key === "1") {
      navigate("/index");
    }

    if (key === "2") {
      navigate("/about");
    }
  };
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}></Tabs>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
