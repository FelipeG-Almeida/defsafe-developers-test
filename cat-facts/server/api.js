import { useStorage } from '@vueuse/core';

const url = 'https://meowfacts.herokuapp.com/';

export default async function fetchFacts() {
	const catFactsStorage = useStorage('catFacts', []);

	if (catFactsStorage.value.length > 0) {
		return;
	}

	try {
		const response = await fetch(`${url}?count=90`);
		if (!response.ok) {
			throw new Error('Error fetching API');
		}
		const data = await response.json();
		catFactsStorage.value = data;
	} catch (error) {
		console.error(error);
	}
}
