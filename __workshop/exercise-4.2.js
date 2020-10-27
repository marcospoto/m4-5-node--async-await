const request = require("request-promise");

const options = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
};

const getTronaldDumpQuote = async () => {
  // write write write
  try {
    const response = await request(options);
    const getQuote = await JSON.parse(response);
    return getQuote.value;
  } catch (err) {}
};

getTronaldDumpQuote().then((result) => console.log(result));
