export async function getAllEvents(location = 'Online') {
	const response = await fetch(`http://localhost:3000/all-events/${location}`);
	return await response.json();
}

export async function saveEvent(data) {
	console.log(data);
	let rawResponse = await fetch('http://localhost:3000/save-event', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	await rawResponse.json();
}