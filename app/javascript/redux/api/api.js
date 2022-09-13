const getGreetingsApi = async () => {
  const data = await fetch('http://127.0.0.1:3000/greetings')
    .then((response) => response.json());
  return data;
};

export default getGreetingsApi;
