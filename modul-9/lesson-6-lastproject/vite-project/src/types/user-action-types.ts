export enum PersonActionTypes {
    CREATE_PERSON = "CREATE_PERSON",
    DELETE_PERSON_BY_ID = "DELETE_PERSON_BY_ID",
    EDIT_PERSON_BY_ID = "EDIT_PERSON_BY_ID"
}

export interface iPerson {
    id: string,
    name: string,
    birthDate: number,
    isEmployes: boolean,
    address: iAddress,
    image: HTMLImageElement | string
}

export interface iAddress {
    region: string,
    district: string
}

export interface createPersonAction {
    type: PersonActionTypes.CREATE_PERSON
    payload: iPerson
}

export interface deletePersonAction {
    type: PersonActionTypes.DELETE_PERSON_BY_ID
    payload: string
}

export interface editPersonAction {
    type: PersonActionTypes.EDIT_PERSON_BY_ID
    payload: string
}

export type Action = createPersonAction | deletePersonAction | editPersonAction