export const getCafes = (lat, lng) => (
  fetch(`${window.API}/api/cafes?lat=${lat}&lng=${lng}`, { method: 'get' })
    .then(res => (res.statusText !== 'OK' ? [] : res.json()))
);

export const getCafeById = placeID => (
  fetch(`${window.API}/api/cafes/${placeID}`, { method: 'get' })
    .then(res => (res.statusText !== 'OK' ? [] : res.json()))
);