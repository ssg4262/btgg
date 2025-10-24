import {MainRouter} from "@/routes/main/MainRouter.tsx";
import {ChartRouter} from "@/routes/chart/ChartRouter.tsx";
export const AppRouter = [
    ...MainRouter,
    ...ChartRouter
];