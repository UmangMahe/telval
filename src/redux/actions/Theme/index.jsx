import { CHANGE_ACCENT_COLOR } from "../../constants/Theme";

export const changeAccentColor = (color)=>({
    type: CHANGE_ACCENT_COLOR,
    color
})