import {
	Navbar,
	NavItem,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Button,
} from 'reactstrap';
import {FaBullhorn, BsFillGearFill} from 'react-icons/all';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';
import {connect} from 'react-redux';

class MainNavbar extends React.Component {
	constructor(props) {
		super(props);
	}
	NightMode = () => {
		this.props.dispatch({type: 'Mode'});
	};
	HideMissionMenu = () => {
		this.props.dispatch({type: 'Layout'});
	};

	render() {
		return (
			<div>
				<Navbar color='dark' light expand='md'>
					<NavbarBrand className='text-white' href='/'>
						Mini İHA için Yapay Zeka Tabanlı Anomali Tespiti ve Semantik
						Seyrüsefer Demosu
					</NavbarBrand>
					<Nav className='ml-auto' navbar>
						<NavItem nav inNavbar>
							<Button color='link' nav caret className='text-white'>
								<FaBullhorn />
							</Button>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className='text-white'>
								<BsFillGearFill />
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<FormControlLabel
										value='start'
										control={<Switch onChange={this.HideMissionMenu} />}
										checked={this.props.layout}
										label='Görev Menüsünü Gizle'
										labelPlacement='start'
									/>
								</DropdownItem>
								<DropdownItem>
									<FormControlLabel
										value='start'
										control={
											<Switch color='primary' onChange={this.NightMode} />
										}
										checked={this.props.darkMode}
										label='Gece Modunu Aktifleştir'
										labelPlacement='start'
									/>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

const MapStateToProps = (_state) => ({
	darkMode: _state.darkMode,
	layout: _state.layout,
});
export default connect(MapStateToProps)(MainNavbar);
