export const addChar = (character) => {
    return {
        type: 'ADD_CHAR',
        payload: character
    }
}
export const deleteChar = (charId) => {
    return {
        type: 'DEL_CHAR',
        payload: charId
    }
}