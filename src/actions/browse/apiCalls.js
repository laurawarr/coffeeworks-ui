export const getCafes = (lat, lng) => (
  fetch(`${window.API}/api/cafes?lat=${lat}&lng=${lng}`, { method: 'get' })
    .then(res => (res.statusText !== 'OK' ? [] : res.json()))
);