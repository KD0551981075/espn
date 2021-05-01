const espn = require("espn-cricket-api");

const searchResults = await espn.search({
  query: "sachin tendulkar",
  limit: 10,
});

console.log(searchResults);
