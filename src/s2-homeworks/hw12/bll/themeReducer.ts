export type ThemeStateType = {
    themeId: number
}

const initialState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeStateType = initialState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE_THEME_ID': {
            return {...state, themeId: Number(action.payload.themeId)}
        }
        default:
            return state
    }
}


type ActionType = {
    type:'CHANGE_THEME_ID',
    payload:{
        themeId:number
    }
}

export const changeThemeId = (themeId: number) => ({type: 'CHANGE_THEME_ID', payload: {themeId}} as const)