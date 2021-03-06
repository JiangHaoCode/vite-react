// ref: https://github.com/ant-design/ant-design-pro/blob/master/src/services/login.ts

import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha() {
  return request(`/user/captcha`);
}
