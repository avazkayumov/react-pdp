import { createPersonAction, deletePersonAction, editPersonAction, iPerson, PersonActionTypes } from "../types/user-action-types"


export const createPersonActionHandler = (user: iPerson):createPersonAction => {
    return {
        type: PersonActionTypes.CREATE_PERSON,
        payload: user
    }
}

export const deletePersonByIdActionHandler = (id: string):deletePersonAction => {
    return {
        type: PersonActionTypes.DELETE_PERSON_BY_ID,
        payload: id 
    }
}

export const editPersonByIdActionHandler = (id: string):editPersonAction => {
    return {
        type: PersonActionTypes.EDIT_PERSON_BY_ID,
        payload: id 
    }
}