import _ from 'lodash';
import { BASE_URL, fetchWithResponse, convertToURLParam, responseError } from './helper';

export const fetchInitWithUser = (userId) => {
  return fetchWithResponse(`${BASE_URL}/users/${userId}`)
  .then((response) => {
    console.log('fetchInitWithUser', response);
    if (response) return response;

    throw responseError({
      appMessage: 'Cannot find spaces',
    });
  });
}
export const fetchUserOrganizations = () => {

  return fetchWithResponse(`${BASE_URL}/organizations`)
  .then((response) => {
    // console.log('space', response);
    const organizations = _.get(response, 'items');
    if (organizations) return organizations;

    throw responseError({
      appMessage: 'Cannot find organizations',
    });
  });
};


export const fetchUserSpaces = () => {

  return fetchWithResponse(`${BASE_URL}/spaces`)
  .then((response) => {
    // console.log('space', response);
    const spaces = _.get(response, 'items');
    if (spaces) return spaces;

    throw responseError({
      appMessage: 'Cannot find spaces',
    });
  });
};

export const fetchSpaceEntries = (spaceId) => {
  const urlParam = convertToURLParam({});

  return fetchWithResponse(`${BASE_URL}/spaces/${spaceId}/entries/${urlParam}`)
  .then((response) => {
    // console.log('fetchSpaceEntries', response);
    const entries = _.get(response, 'entries', []);
    if (entries) {
      return entries;
    }

    throw responseError({
      appMessage: 'Cannot find spaces',
    });
  });
};

export const fetchSpace = (spaceId) => {

  const urlParam = convertToURLParam({});

  return fetchWithResponse(`${BASE_URL}/spaces/${spaceId}${urlParam}`)
  .then((response) => {
    const space = _.get(response, 'space');
    // console.log('space', space);
    if (space) {
      return space;
    }
    throw responseError({
      appMessage: 'Cannot find spaces',
    });
  });
};

export const fetchCreateSpace = (name, { organizationId, defaultLocale }) => {
  return fetchWithResponse(`${BASE_URL}/spaces`, {
    method: 'POST',
    body: JSON.stringify({
      name,
      defaultLocale,
      organizationId,
    })
  })
  .then((response) => {
    return response;
  });
}

export const fetchUpdateSpace = (spaceId, { name, defaultLocale }) => {
  return fetchWithResponse(`${BASE_URL}/spaces/${spaceId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,
      defaultLocale,
    })
  })
  .then((response) => {
    return response;
  });
}
