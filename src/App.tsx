import { useState } from "react";
import { ConfigProvider, DatePicker, Button } from "antd";
import type { DatePickerProps } from "antd";
import zhCN from "antd/locale/zh_CN";
import { useStore } from './store/count.ts';

type DateType = Parameters<NonNullable<DatePickerProps["onChange"]>>[0];

function App() {
  const store = useStore();
  const [date, setDate] = useState<DateType>(null);
  function handleChange(value: DateType) {
    console.log("[handleChange]", value);
    console.log(store.count);
    setDate(value);
  }
  return (
    <>
      <div>
        <ConfigProvider locale={zhCN}>
          <Button
            type="primary"
            onClick={() => {
              store.add();
            }}
          >
            double count
          </Button>
          <Button
            type="default"
            onClick={() => {
              store.reset();
            }}
          >
            Reset
          </Button>
          <div>count = {store.count}</div>
          <div>double count = {store.doubleCount}</div>
          <DatePicker showTime onChange={handleChange} />
          <div style={{ marginTop: 16 }}>
            当前日期：{date ? date.format("YYYY-MM-DD HH:mm:ss") : "未选择"}
          </div>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
