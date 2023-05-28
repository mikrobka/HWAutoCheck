export type ThemeStateType = {
    themeId: number
}
export type ChangeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdAT): ThemeStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
