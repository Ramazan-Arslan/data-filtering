const fetchData = async (body: object) => {
  const path = process.env.VUE_APP_ENDPOINT_URL;
  const apiKey = process.env.VUE_APP_API_KEY;
  const req = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(body),
  });

  return await req.json();
};

export default fetchData;
