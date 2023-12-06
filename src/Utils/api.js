import axios from './useAxios';

//vote
export function singleCategory(catId) {
	return axios.get(`/categories/${catId}`);
}

export function getActiveStage() {
	return axios.get(`/settings/active-stage`);
}

///categories/:categoryId/participants/shortlisted
export function getShortlistedParticipant(catId, stage, search) {
	return axios.get(`/categories/${catId}/participants/shortlisted/${stage}?search=${search}`);
}

////events/vote/:categoryId/:participantId
export const voting = (catId, participantId, payload) => {
	return axios.post(`/events/vote/${catId}/${participantId}`, payload);
};

///events/:eventId
export const ongoingEvent = () => {
	return axios.get(`/events/ongoing-event`);
};

///events/:eventId
export const singleEvent = (id) => {
	return axios.get(`/events/${id}`, {});
};

export function allCountries() {
	return axios.get(`/countries/`);
}

export function allTalents() {
	return axios.get(`/talents/`);
}



export function eventCategories(eventId, countryId, talentId) {
	return axios.get(
		`/categories/event/${eventId}?country=${countryId}&talent=${talentId}`
	);
}
