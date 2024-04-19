import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";
import React from "react";

export const buildPlugins = ({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: paths.html,
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(""),
    __PROJECT__: JSON.stringify("storybook"),
  }),
  new webpack.HotModuleReplacementPlugin(),
  // new ReactRefreshWebpackPlugin(),
];
