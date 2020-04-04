import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Detail(props) {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Detail Screen</Text>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('Search')}
			>
				<Text style={styles.buttonText}>Go to Search Screen</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	text: {
		color: '#101010',
		fontSize: 24,
		fontWeight: 'bold'
	},
	buttonContainer: {
		backgroundColor: '#222',
		borderRadius: 5,
		padding: 10,
		margin: 20
	},
	buttonText: {
		fontSize: 20,
		color: '#fff'
	}
});

export default Detail;
