import MainNavbar from "./Components/Navbar/MainNavbar";
import LeftMenu from "./Components/LeftMenu/LeftMenu";
import MissionWindow from "./Components/MissionWindow/MissionWindow";
import Map from "./Components/Map/Map";
import SplitPane from 'react-split-pane';
import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { connect } from 'react-redux';


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const Theme = ThemeSelector(this.props.darkMode);
        const Layout = LayoutDesginer(this.props.layout);
        return (
        <div style={{ backgroundColor: Theme.BackGroundColor,color:Theme.TextColor}}>
            <MainNavbar darkMode="false"/>
            <SplitPane split="vertical">
                <div initialSize="20%">
                    <LeftMenu/>
                </div>
                <div initialSize={Layout.mapWindowLayout} >
                    <Map/>
                </div>
                <div initialSize={Layout.missionWindowLayout} >
                    <MissionWindow backgroundColor={Theme.BackGroundColor} textColor={Theme.TextColor}/>
                </div>
            </SplitPane>
        </div>
    );
    }
}
function ThemeSelector(_darkMode) {
    const DarkModeColors = {
        BackGroundColor: '#181818',
        TextColor:'#B3B3B3'
    };
    const LightModeColors = {
        BackGroundColor: '#fff',
        TextColor:'#000'
    };
    return (_darkMode) ? DarkModeColors : LightModeColors;
}

function LayoutDesginer(_layout) {
    const normalModLayout = {
        mapWindowLayout: '60%',
        missionWindowLayout:'20%'
    };
    const wideModeLayout = {
        mapWindowLayout: '80%',
        missionWindowLayout:'0%'
    };
    return (_layout) ? wideModeLayout : normalModLayout;
}
const MapStateToProps = (_state) =>({
    darkMode: _state.darkMode,
    layout: _state.layout
});
export default connect(MapStateToProps)(App);
