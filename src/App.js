import MainNavbar from './Components/Navbar/MainNavbar';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import MissionWindow from './Components/MissionWindow/MissionWindow';
import Map from './Components/Map/Map';
import SplitPane from 'react-split-pane';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {connect} from 'react-redux';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const theme = ThemeSelector(this.props.darkMode);
		const layout = LayoutDesginer(this.props.layout);
		return (
			<div
				style={{
					backgroundColor: theme.backGroundColor,
					color: theme.textColor,
				}}>
				<MainNavbar darkMode='false' />
				<SplitPane split='vertical'>
					<div initialSize='20%'>
						<LeftMenu />
					</div>
					<div initialSize={layout.mapWindowLayout}>
						<Map />
					</div>
					<div initialSize={layout.missionWindowLayout}>
						<MissionWindow
							backgroundColor={theme.backGroundColor}
							textColor={theme.textColor}
						/>
					</div>
				</SplitPane>
			</div>
		);
	}
}
function ThemeSelector(_darkMode) {
	const darkModeColors = {
		backGroundColor: '#181818',
		textColor: '#B3B3B3',
	};
	const lightModeColors = {
		backGroundColor: '#fff',
		textColor: '#000',
	};
	return _darkMode ? darkModeColors : lightModeColors;
}
function LayoutDesginer(_layout) {
	const normalModLayout = {
		mapWindowLayout: '60%',
		missionWindowLayout: '20%',
	};
	const wideModeLayout = {
		mapWindowLayout: '80%',
		missionWindowLayout: '0%',
	};
	return _layout ? wideModeLayout : normalModLayout;
}
const MapStateToProps = (_state) => ({
	darkMode: _state.darkMode,
	layout: _state.layout,
});
export default connect(MapStateToProps)(App);
