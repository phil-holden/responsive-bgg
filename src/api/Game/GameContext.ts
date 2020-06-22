import { Context } from "@azure/functions"
import { GameResponse } from './GameModels'

export interface GameContext extends Context {
    bindingData: {
        gameId: number
    },
    res: {
        body: GameResponse
    }
}