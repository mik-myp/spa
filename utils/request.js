/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { history } from 'umi';
import { notification, message, Modal } from 'antd';
import { getLocalStorage } from '@/utils/storage';
import { stringify } from 'querystring';
import { getPageQuery } from '@/utils/utils';
import { errorCodeMap } from '@/utils/publicUtils';
import { clearToken } from '@/utils/token';
import { closeIcon, ErrorIcon, WarningIcon } from './iconList';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */

// let modal: any = null;
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    if (response.status === 401) {
      // if (!modal) {
      Modal.warning({
        title: '登录超时',
        content: '登录已超时，请重新登录。',
        okText: '知道了',
        wrapClassName: 'to-login-modal',
        onOk() {
          clearToken();
          Modal.destroyAll();
          const { redirect } = getPageQuery();
          const locationPath = window.location.pathname;
          if (locationPath !== '/user/login' && !redirect) {
            history.replace({
              pathname: '/user/login',
              search: stringify({
                redirect: window.location.href,
              }),
            });
          }
        },
        icon: WarningIcon,
      });
      // }
    } else {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, url } = response;

      notification.error({
        message: `请求错误 ${status}: ${url}`,
        description: errorText,
        closeIcon: closeIcon,
        icon: ErrorIcon,
      });
    }
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
      closeIcon: closeIcon,
      icon: ErrorIcon,
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  const token = getLocalStorage('token');
  if (token) {
    return {
      url,
      options: {
        ...options,
        headers: {
          ...options.headers,
          // ticket: token,
          token,
        },
      },
    };
  }
  return {
    url,
    options: { ...options },
  };
});

// clone response in response interceptor
request.interceptors.response.use(async (response, options) => {
  // errorCodeMap 登录页面需要单独处理的状态码
  if (response.status === 200 && options.responseType !== 'blob') {
    const data = await response.clone().json();
    // if (!data.success && !errorCodeMap.has(data.status)) {
    //   message.error(data.message);
    // }
    if (data.code !== 1 && !errorCodeMap.has(Number(data.code))) {
      message.error(data.message);
    }
  }
  return response;
});

export default request;
