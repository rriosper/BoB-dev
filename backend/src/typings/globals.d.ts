declare type Env = 'development' | 'test' | 'production';

declare namespace NodeJS {
  export interface ProcessEnv {
    ENV: Env;
    API_PORT: number;
  }
}

declare type HttpMethod = 'put' | 'post' | 'get' | 'patch' | 'delete';
