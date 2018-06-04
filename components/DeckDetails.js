import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class DeckDetails extends Component {
	static navigationOptions = {
		title: 'Detail'
	}

	componentDidMount() {
		// this.props.getUser('relferreira')
	}

	render() {
		/*const {user, loadingProfile} = this.props

		if (loadingProfile) return <Text>Loading...</Text>

		const {name, login} = user*/
		return (
			<View>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
				<Text>DETAIL</Text>
			</View>
		)
	}
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(DeckDetails)