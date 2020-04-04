import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function SearchBox(props) {
	const { searchItem, onChange, handleSubmit } = props;
	return (
		<View style={styles.searchContainer}>
			<FontAwesome name="search" size={32} />
			<TextInput
				style={styles.inputField}
				autoCapitalize={'none'}
				autoCorrect={false}
				placeholder="Search"
				value={searchItem}
				onChangeText={onChange}
				onSubmitEditing={handleSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	searchContainer: {
		backgroundColor: '#F0EEEE',
		height: 50,
		flexDirection: 'row',
		marginHorizontal: 25,
		paddingHorizontal: 15,
		borderRadius: 12,
		alignItems: 'center'
	},
	inputField: {
		flex: 1,
		marginLeft: 25,
		fontSize: 18
	}
});

export default SearchBox;
