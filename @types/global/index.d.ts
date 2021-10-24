export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly REACT_APP_API_PATH: string;
    }
  }
}
