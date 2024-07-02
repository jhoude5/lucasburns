require('dotenv').config();

const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	

    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
          files: './_site/css/**/*.css'
    });
    eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
    );
    eleventyConfig.addPassthroughCopy("bundle.js");
    eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });
    eleventyConfig.addPassthroughCopy("img");
    
    eleventyConfig.addFilter("postDate", dateObj => {
      return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

  return {
    passthroughFileCopy: true
  };
  
};