import {
	defineStore,
} from 'pinia';
import {
	ref
} from 'vue';
import {
	saveEvent
} from '../services/EventsService';

export default defineStore('appointment', () => {
	const dateAndTime = ref(null);
	const name = ref('');
	const phoneNumber = ref('');
	const email = ref('');
	const location = ref('');

	function setAppointmentTime(date) {
		dateAndTime.value = date;
	}

	function saveAppointment() {
		saveEvent({
			dateAndTime: dateAndTime.value,
			name: name.value,
			phoneNumber: phoneNumber.value,
			email: email.value,
			location: location.value,
		});
	}
	return {
		setAppointmentTime,
		saveAppointment,
		dateAndTime,
		name,
		phoneNumber,
		email,
		location,
	};
});