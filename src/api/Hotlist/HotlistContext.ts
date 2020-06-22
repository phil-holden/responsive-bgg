import { Context } from "@azure/functions"
import { HotlistResponse } from './HotlistModels'

export interface HotlistContext extends Context {
    bindingData: {
        count: number
    },
    res: {
        body: HotlistResponse
    }
}