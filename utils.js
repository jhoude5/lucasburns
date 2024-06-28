require('dotenv').config();
const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  accessToken: process.env.CTFL_ACCESSTOKEN,
  space: process.env.CTFL_SPACE,
});

exports.contentfulClient = contentfulClient;