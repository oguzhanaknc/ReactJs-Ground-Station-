const initialState = {
	darkMode: false,
	layout: false,
};

function RootReducer(_state = initialState, _action) {
	switch (_action.type) {
		case 'Mode':
			return {
				darkMode: !_state.darkMode,
				layout: _state.layout,
			};
		case 'Layout':
			return {
				layout: !_state.layout,
				darkMode: _state.darkMode,
			};
		default:
			return _state;
	}
}

export default RootReducer;
