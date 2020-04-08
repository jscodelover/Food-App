import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import SearchBox from '../components/SearchBox';
import REQUEST from '../utils/https.servcie';

function Search(props) {
	const [searchText, setSearchText] = useState('');
	const [restaurant, setRestaurant] = useState([]);

	async function handleSearch() {
		const res = await REQUEST({
			url: `/search?q=${searchText}`,
			method: 'get'
		});
		res.data.restaurants.length && setRestaurant(res.data.restaurants);
		console.log(res.data.restaurants);
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
			<Text>Search Result : {restaurant.length}</Text>
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
