import express from 'express';
import cors from 'cors';
import {
	setEvent,
	getAvailableEvents
} from './calendar.js';

const app = express();
const port = 3000;

app.use(cors({
	origin: true
}));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/all-events/:calendar', async (req, res) => {
	const calendarName = req.params.calendar;
	let events = await getAvailableEvents(calendarName);
	res.send(JSON.stringify(events));
});

app.post('/save-event', async (req, res) => {
	const summary = `${req.body.name} - ${req.body.phoneNumber} - ${req.body.email}`;
	const date = req.body.dateAndTime;
	const calendarName = req.body.calendar;
	await setEvent(summary, date, calendarName);
	res.status(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));