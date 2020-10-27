const request = require("request-promise");

// getDadJoke

const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
};

const getDadJoke = async () => {
  try {
    const response = await request(options);
    const randomJoke = await JSON.parse(response);
    return randomJoke.joke;
  } catch (err) {}
};

getDadJoke().then((result) => console.log(result));
