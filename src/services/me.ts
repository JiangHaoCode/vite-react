import request from '@/utils/request';

export async function queryMe(): Promise<any> {
  return request('/auth/me');
}
