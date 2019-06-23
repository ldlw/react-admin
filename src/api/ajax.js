import axios from 'axios';
import { message} from "antd";

export default function ajax(url, data = {}, method = 'GET') {
  //初始化请求参数
  let reqParams = data;
  //转换为大写，在进行比较
  method = method.toLowerCase();

  if(method === 'get') {
    reqParams = {
      params:data
    }
  }

  return axios[method](url, reqParams)
    .then((res) =>{
      const { data } = res;

      if (data.status === 0){
        return data.data;
      } else {
        message.error(data.msg,2);
      }
    })
    .catch((err) =>{
      message.error('网络出现错误，请刷新重试',2);
    })
}