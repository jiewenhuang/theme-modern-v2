import axios from "axios";
import { createCoreApiClient, createPublicApiClient, createConsoleApiClient } from "@halo-dev/api-client";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8098",
  timeout: 10000,
  headers: {
    // 使用个人令牌进行认证
    Authorization:
      "",
  },
});

const coreApiClient = createCoreApiClient(axiosInstance);
const publicApiClient = createPublicApiClient(axiosInstance);
const consoleApiClient = createConsoleApiClient(axiosInstance);

export { coreApiClient, publicApiClient, consoleApiClient, axiosInstance };
