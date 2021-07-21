import { defineModule } from 'concent';

import { queryMe } from '@/services/me';

export interface Me {
  exp?: number;
  iss?: string;
  password?: string;
  username?: string;
}

const Model = defineModule({
  state: { exp: 0, iss: '', password: '', username: '' } as Me,

  reducer: {
    fetchMe: async () => {
      const response = await queryMe();
      return response.data;
    },
  },
});

export default Model;
