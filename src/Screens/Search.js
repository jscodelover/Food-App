import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SearchBox from '../components/SearchBox';

function Search(props) {
	const [searchText, setSearchText] = useState('');

	function handleSearch() {
		alert(searchText);
	}

	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Search Screen</Text>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={() => navigation.navigate('Detail')}
			>
				<Text style={styles.buttonText}>Go to Detail Screen</Text>
			</TouchableOpacity>
			<SearchBox
				searchItem={searchText}
				onChange={text => setSearchText(text)}
				handleSubmit={handleSearch}
			/>
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

export default Search;
