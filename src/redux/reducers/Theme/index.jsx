import { CHANGE_ACCENT_COLOR } from "../../constants/Theme";

const initialState = {
  accentColor: "#fffff",
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACCENT_COLOR:
      return {
        ...state,
        accentColor: action.color,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
