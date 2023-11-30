import axios from './useAxios';

//vote

////events/vote/:categoryId/:participantId
export const voting = (authtoken, catId, participantId, payload) => {
	return axios.post(`/events/vote/${catId}/${participantId}`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

export const getEvents = (page) => {
	return axios.get(`/events/?page=${page}`);
};

export const contactUs = (payload) => {
	return axios.post(`/contact`, payload);
};
//////
export const onboarding = (authtoken, payload) => {
	return axios.put(`/user/onboarding`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

///
export const getUsers = (authtoken) => {
	return axios.get(`/auth/me`, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

// /password/change
export const changePassword = (authtoken, payload) => {
	return axios.put(`/password/change`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

// /password/forgot
export const sendMail = (authtoken, payload) => {
	return axios.post(`/password/forgot`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

///events/upcoming-events
export const upcomingEvent = () => {
	return axios.get(`/events/upcoming-events`, {});
};

///events/:eventId
export const singleEvent = (id) => {
	return axios.get(`/events/${id}`, {});
};

///events/:eventId
export const contest = (id, payload, authtoken) => {
	return axios.post(`/events/join/${id}`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

////user/update-profile /user/update-profile
export const updateProfile = (authtoken, payload) => {
	return (
		axios.put(`/user/update-profile`, payload),
		{
			headers: {
				Authorization: 'Bearer ' + authtoken,
			},
		}
	);
};

export const imageUpload = (authtoken, payload) => {
	return axios.post(`/upload-image`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

///upload-video
export const videoUpload = (authtoken, payload) => {
	return axios.post(`/upload-video`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

///events/:eventID/participants?page=1 /events/:eventID/participants
export const eventParticipants = (eventId) => {
	return axios.get(`/events/${eventId}/participants`);
};

////user/participants/:userId
export const singleParticipant = (authtoken, catId, userId) => {
	return axios.get(`/categories/${catId}/participants/${userId}`, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};

///
export const onGoing = () => {
	return axios.get('/events/ongoing-events');
};

export function eventCategories(eventId, page, countryId, talentId) {
	return axios.get(
		`/categories/event/${eventId}?page=${page}&country=${countryId}&talent=${talentId}`
	);
}

export function singleCategory(catId) {
	return axios.get(`/categories/${catId}`);
}

///categories/:categoryID/participants
export function categoryParticipants(catId, page, search) {
	return axios.get(`/categories/${catId}/participants?page=${page}`);
}

export function getTalents(authtoken) {
	return axios.get(`/talents/`, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
}

export function getCountries(authtoken) {
	return axios.get(`/countries`, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
}

export function getActiveStage() {
	return axios.get(`/settings/active-stage`);
}

///categories/:categoryId/participants/shortlisted
export function getShortlistedParticipant(catId, stage, search) {
	return axios.get(`/categories/${catId}/participants/shortlisted/${stage}?search=${search}`);
}

export function allCategories() {
	return axios.get(`/categories/`);
}

export function allCountries() {
	return axios.get(`/countries/`);
}

export function allTalents() {
	return axios.get(`/talents/`);
}
