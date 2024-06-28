require('dotenv').config();

const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:

		// optional, output image formats
		formats: ["webp", "jpeg"],
		// formats: ["auto"],

		// optional, output image widths
		// widths: ["auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
};

module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
          files: './_site/css/**/*.css'
    });
    // eleventyConfig.addPassthroughCopy({ "images/favicon": "/" });
};
module.exports = (cfg) => {
    cfg.addPassthroughCopy("images");
}


module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );
};