<template>
    <div class="q-pa-md">

        <q-form
            @submit="onSubmit"
            class="q-gutter-md"
        >
            <q-select 
                filled 
                v-model="store.location" 
                :options="options" 
                label="Filled" 
            />

            <q-input
                :disable="isDisabled"
                type="tel"
                v-model="store.phoneNumber"
                label="Вашият телефонен номер *"
                lazy-rules
                :rules="[ val => val && val.length > 8 || 'Моля проверете дали сте въвели правилно телефонния си номер']"
            />

            <div>
                <q-btn label="Запазване" type="submit" class="bg-primary text-dark"/>
            </div>
        </q-form>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import useAppointmentStore from '../stores/appointment.store';

const options = ref(['Sofia', 'Plovdiv', 'Veliko Tarnovo', 'Burgas']);

const store = useAppointmentStore();

const isDisabled = computed(() => store.dateAndTime == null);

const validateEmail = (value) => {
	return String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

function onSubmit() {
	store.saveAppointment();
}
</script>

<style>

</style>