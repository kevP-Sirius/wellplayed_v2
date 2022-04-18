/// <reference types="react-scripts" />
declare module "react-dom/client" {
    // typing module default export as `any` will allow you to access its members without compiler warning
    var createRoot: any;
    export {createRoot};
  }
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
