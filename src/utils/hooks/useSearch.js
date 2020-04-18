import { useState } from 'react';
import REQUEST from '../https.servcie';

function useSearch() {
	const [restaurant, setRestaurant] = useState([]);
	const [error, handleError] = useState(undefined);

	async function handleSearch(searchText) {
		const res = await REQUEST({
			url: `/search?q=${searchText}`,
			method: 'get'
		});
		if (res.data.code) {
			handleError(res.data.message);
		} else {
			error && handleError(undefined);
			setRestaurant(res.data.restaurants);
		}
		console.log(res.data);
	}

	return [restaurant, error, handleSearch];
}

export default useSearch;
