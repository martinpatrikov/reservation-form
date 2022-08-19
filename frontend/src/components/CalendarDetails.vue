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
                @change="onSelection" 
                label="Filled" 
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

const options = ref(['Sofia', 'Plovdiv', 'Veliko Tarnovo', 'Online']);

const store = useAppointmentStore();

function onSubmit() {
	store.saveAppointment();
}
</script>

<style>

</style>