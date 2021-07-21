import { message } from 'antd';
import { defineModule } from 'concent';
// @ts-ignore
import { history } from '@vitjs/runtime';
import { stringify } from 'querystring';

import { fakeAccountLogin } from '@/services/login';
import { getPageQuery } from '@/utils/utils';

const module = defineModule({
  state: {
    status: '',
    type: '',
  },

  reducer: {
    login: async (payload: any, moduleState, actionCtx) => {
      const response = await fakeAccountLogin(payload);
      actionCtx.dispatch(module.reducer.changeLoginStatus, response);
      console.log(window)
      if (response.code === 200) {
        localStorage.setItem('token', response.data.token);
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        message.success('🎉 🎉 🎉  登录成功！');
        
        let { redirect } = params as { redirect: string };
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            // @ts-ignore
            if (window.routerBase !== '/') {
              // @ts-ignore
              redirect = redirect.replace(window.routerBase, '/');
            }
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        history.replace(redirect || '/');
      }
    },

    logout() {
      localStorage.removeItem('status');
      const { redirect } = getPageQuery();
      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },

    changeLoginStatus(payload: any) {
      // setAuthority(payload.currentAuthority);
      return {
        status: payload.status,
        type: payload.type,
      };
    },
  },
});

export default module;
