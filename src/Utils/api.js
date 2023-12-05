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
export const voting = (authtoken, catId, participantId, payload) => {
	return axios.post(`/events/vote/${catId}/${participantId}`, payload, {
		headers: {
			Authorization: 'Bearer ' + authtoken,
		},
	});
};
