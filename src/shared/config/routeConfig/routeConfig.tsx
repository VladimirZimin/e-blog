import { RouteProps } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

// создадим перечасление внутки которого обьявим список роутов приложения
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

// создаем обьект в которм мы для каждого маршрута из enum AppRoutes укажем путь до компонента
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// обьявляем сами роуты (маршрут к ним, компонент...)
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
