import * as t from '../types'

export const loadSettings = () => async (dispatch) => {
    dispatch({
        type: 't.LOAD_SETTINGS'
    })
}