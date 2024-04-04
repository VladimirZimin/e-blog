export type TMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildEnv {
  mode: TMode;
  port: number;
}

export interface BuildOptions {
  mode: TMode;
  paths: BuildPaths;
  isDev: boolean; // true - development, false - production
  port: number;
}
