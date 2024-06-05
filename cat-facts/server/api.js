const url = 'https://meowfacts.herokuapp.com/';

export default async function fetchFacts() {
	const localData = localStorage.getItem('catFacts');

	if (localData) {
		return;
	}

	try {
		const response = await fetch(`${url}?count=90`);
		if (!response.ok) {
			throw new Error('Error fetching API');
		}
		const data = await response.json();
		localStorage.setItem('catFacts', JSON.stringify(data));
	} catch (error) {
		console.error(error);
	}
}
