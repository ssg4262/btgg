import type {RouteObject} from "react-router-dom";
import {SuperChart} from "@/pages/chart/SuperChart.tsx";

export const ChartRouter : RouteObject[]  = [
    { path: "/chart", element: <SuperChart/> },
]