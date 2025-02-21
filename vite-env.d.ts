/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBSERVICES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
