import { TOGGLE_THEME } from "../actions/themeActions";

const initialState = {
    theme: localStorage.getItem('theme') || 'light'
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_THEME:
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return {
          ...state,
          theme: newTheme
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;