require('dotenv').config();

const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { DateTime } = require("luxon");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");

module.exports = function (eleventyConfig) {
	

    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
          files: './_site/css/**/*.css'
    });
    eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
    );
    eleventyConfig.addFilter("postDate", dateObj => {
      return DateTime.fromISO(dateObj, {zone: 'utc'}).toFormat("LLL dd, yyyy");
    });
    eleventyConfig.addPassthroughCopy("bundle.js");
    // eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPlugin(faviconsPlugin, {});
    
    

  return {
    passthroughFileCopy: true
  };
  
};