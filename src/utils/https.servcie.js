import getEnvVars from '../../environment';
import axios from 'axios';

const REQUEST = config => {
	const { apiUrl, apiKey } = getEnvVars();
	const HTTP = axios.create({
		baseURL: apiUrl,
		headers: { Accept: 'application/json', 'user-key': apiKey }
	});

	HTTP.interceptors.request.use(request => {
		request.url = request.baseURL + config.url;
		request.data = config.data;
		request.method = config.method;
		return request;
	});

	HTTP.interceptors.response.use(
		response => {
			if (response.status == 200 || response.status == 201) {
				return response;
			}
		},
		error => {
			if (
				error.response.status === 404 ||
				error.response.status === 400 ||
				error.response.status === 420 ||
				error.response.status === 403
			) {
				return error.response;
			}
			if (error.response.status === 401) {
				return error.response;
			}
		}
	);
	return HTTP();
};

export default REQUEST;
