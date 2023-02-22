
import { Routes } from "./enums"

type TypeConfig = {[key: string]: {position: number[], rotation: number[]}}

export const DEFAULT_PLACEMENT = {
    rotation: [0, -Math.PI / 4, 0],
    position: [0.4, 0, -1.5],
}

const ROUTES_CONFIG: TypeConfig = {
    [Routes.Climate]: {
        rotation: [Math.PI / 3, Math.PI, 0],
        position: [0, 0.5, 2],
    },
    [Routes.Controls]: {
        rotation: [Math.PI / 3, Math.PI, 0],
        position: [0, -0.25, 0.5],
    }
}

export default ROUTES_CONFIG;