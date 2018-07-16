import React from 'react';

import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const DrawerButton = ({ navigation }) => (
	<TouchableOpacity
		style={styles.wrapper}
		onPress={()=> navigation.openDrawer()}
	>
		<Image
			source={require('../img/drawer.png')}
			style={styles.icon}
			resizeMode="contain"
		/>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	wrapper: {
		marginLeft:10
	},
	icon:{
		width:24,
		height:24,
		backgroundColor:'transparent'
	}
});

export default DrawerButton;