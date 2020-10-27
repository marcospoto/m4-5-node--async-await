const request = require("request-promise");

const options = {
  uri: "https://geek-jokes.sameerkumar.website/api?format=json",
  headers: {
    Accept: "application/json",
  },
};

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const response = await request(options);
    const getJoke = await JSON.parse(response);
    return getJoke.joke;
  } catch (err) {}
};

getGeekJoke().then((result) => console.log(result));
