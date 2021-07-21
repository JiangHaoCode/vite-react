import { useState, FC, useEffect } from 'react';
import { Alert, Tabs } from 'antd';
import {
  // AlipayCircleOutlined,
  LockOutlined,
  // MailOutlined,
  // MobileOutlined,
  // TaobaoCircleOutlined,
  UserOutlined,
  // WeiboCircleOutlined,
  SafetyOutlined
} from '@ant-design/icons';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';

import { useModuleWithConnect } from '@/services/concent';
import { getFakeCaptcha } from '@/services/login';
import type { LoginParamsType } from '@/services/login';

import styles from './index.module.less';

const LoginMessage: FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type='error'
    showIcon
  />
);

const Login: FC = () => {
  const { state, connectedState, mr } = useModuleWithConnect('login', ['loading']);
  const submitting = connectedState.loading['login/login'];
  const [type, setType] = useState<string>('account');
  const [captcha, setCaptcha] = useState<string>('');

  useEffect(() => {
    getFakeCaptcha().then(res => {
      setCaptcha(res.data.picPath)
    })
  }, []);

  const handleSubmit = (values: LoginParamsType) => {
    mr.login({ ...values, type });
  };

  // useEffect(() => {
  //
  //   setCaptcha(response.data.picPath)
  // }, [])

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values as LoginParamsType);
          return Promise.resolve();
        }}
      >
        <Tabs activeKey={type} onChange={setType}>
          <Tabs.TabPane key='account' tab='账户密码登录' />
          {/* <Tabs.TabPane key='mobile' tab='手机号登录' /> */}
        </Tabs>

        {state.status === 'error' && state.type === 'account' && !submitting && (
          <LoginMessage content='账户或密码错误（admin/vite-react)' />
        )}
        {type === 'account' && (
          <>
            <ProFormText
              name='username'
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder='用户名'
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name='password'
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder='密码'
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <SafetyOutlined className={styles.prefixIcon} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder='请输入验证码'
                captchaTextRender={() => {
                  return <img style={{width: 150}} src={captcha} alt="" />;
                }}
                name='captcha'
                countDown={0.5}
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async () => {
                  const result = await getFakeCaptcha();
                  setCaptcha(result.data.picPath)
                  // message.success('获取验证码成功！验证码为：1234');
                }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name='autoLogin'>
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </ProForm>
    </div>
  );
};

export default Login;
