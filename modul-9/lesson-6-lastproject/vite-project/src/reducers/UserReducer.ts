import { iPerson, Action, PersonActionTypes } from "../types/user-action-types"

const INIT_STATE: {
    persons: iPerson[]
} = {
    persons: []
}

export default function(state = INIT_STATE, action: Action) {
    switch(action.type) {
        case PersonActionTypes.CREATE_PERSON: {
            return state
        }
        case PersonActionTypes.DELETE_PERSON_BY_ID: {
            return state
        }
        case PersonActionTypes.EDIT_PERSON_BY_ID: {
            return state
        }
        default: {   
            return state
        }
    }
}