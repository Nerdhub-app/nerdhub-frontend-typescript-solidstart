import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import axiosClientInstance from "./axios.client";
import { getAxiosServerInstance } from "./axios.server";
import { isClient } from "~/helpers/runtime.helper";

export function getAxiosInstance() {
  return isClient() ? axiosClientInstance : getAxiosServerInstance();
}

export default class Axios {
  static get<TResponse = unknown>(...args: Parameters<typeof axios.get>) {
    return getAxiosInstance().get<TResponse, AxiosResponse<TResponse, unknown>>(...args);
  }

  static post<TResponse = unknown, TData = unknown>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig<TData>,
  ) {
    return getAxiosInstance().post<TResponse, AxiosResponse<TResponse, unknown>, TData>(
      url,
      data,
      config,
    );
  }

  static put<TResponse = unknown, TData = unknown>(
    url: string,
    data: TData,
    config?: AxiosRequestConfig<TData>,
  ) {
    return getAxiosInstance().put<TResponse, AxiosResponse<TResponse, unknown>, TData>(
      url,
      data,
      config,
    );
  }

  static delete<TResponse = unknown, TData = unknown>(
    url: string,
    config?: AxiosRequestConfig<TData>,
  ) {
    return getAxiosInstance().delete<TResponse, AxiosResponse<TResponse, unknown>>(url, config);
  }
}
