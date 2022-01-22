export function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	Client.checkForName(formText);

	console.log('::: Form Submitted :::');
	getCatFact().then(function (res) {
		document.getElementById('results').innerHTML = res.text;
	});
}

const getCatFact = async () => {
	const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;
	const response = await fetch(url);
	try {
		const data = await response.json();
		return data;
	} catch (error) {
		// appropriately handle the error
		console.log('error', error);
	}
};
