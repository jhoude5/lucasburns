const client = require('../utils').contentfulClient;

module.exports = async () => {
	// create a request for all entries that match our post type. 
	// we can use the `order` property to sort them reverse-chronologically by their published date.
  const posts = await client.getEntries({
    content_type: 'testimonials',
    order: '-sys.updatedAt',
  });
  return posts.items;
};
