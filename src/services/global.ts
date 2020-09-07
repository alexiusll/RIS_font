/*
 * @Descripttion: 全局的后台请求
 * @Author: linkenzone
 * @Date: 2020-09-07 21:38:41
 */
import request from '@/utils/request';

// 样例:修改样本入组时间
export async function ModifyInGroupInfo({ sample_id, body }: { sample_id: number; body: any }) {
  return request(`/v1/sample/in_group_info/${sample_id}`, {
    method: 'POST',
    data: body,
  });
}