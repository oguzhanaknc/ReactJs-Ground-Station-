
const initialState = {
       darkMode : false,
       layout : false
}

function rootReducer(state=initialState,action) {
    switch (action.type) {
        case "Mode":
            return{
                darkMode: !state.darkMode,
                layout: state.layout
            };
        case "Layout":
            return {
                layout: !state.layout,
                darkMode: state.darkMode
            };
        default:
            return state;
    }

};

export default rootReducer;