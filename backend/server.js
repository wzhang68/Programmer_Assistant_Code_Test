const needle = require("needle");
const express = require("express");
const app = express();
const token =
  "AAAAAAAAAAAAAAAAAAAAAAN7VwEAAAAA9tOgwEnnj1Kux4A1%2Fs5K1iq2VcI%3DzwbgJeWHmtJ6llZUOJu7071M2RNqp8LyHMtstQZqc5aWmq3JDO";

async function getRequest(username) {
  // These are the parameters for the API request
  // specify Tweet IDs to fetch, and any additional fields that are required
  // by default, only the Tweet ID and text are returned

  const endpointURL = `https://api.twitter.com/2/users/by/username/${username}`;
  const res = await needle("get", endpointURL, {
    headers: {
      "User-Agent": "v2FullArchiveJS",
      authorization: `Bearer ${token}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsuccessful request");
  }
}

app.get("/search/user/:username", (req, res) => {
  (async () => {
    try {
      // Make request
      const response = await getRequest(req.params.username);
      res.json(response);
      console.dir(response, {
        depth: null,
      });
    } catch (e) {
      console.log(e);
    }
  })();
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
