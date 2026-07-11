const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addCollection("post", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/blog/*.md")
      .sort((a, b) => a.date - b.date)
  );

  eleventyConfig.addCollection("postTerraLuz", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/blog/*.md")
      .filter((post) => post.data.property === "terra-luz")
      .sort((a, b) => a.date - b.date)
  );

  eleventyConfig.addCollection("postCozyCactus", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/blog/*.md")
      .filter((post) => post.data.property === "cozy-cactus")
      .sort((a, b) => a.date - b.date)
  );

  eleventyConfig.addCollection("postSundune", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("content/blog/*.md")
      .filter((post) => ["ps-retreat", "the-sundune"].includes(post.data.property))
      .sort((a, b) => a.date - b.date)
  );

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("MMMM d, yyyy");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  eleventyConfig.addPassthroughCopy({ "content/blog/images": "images" });

  return {
    dir: {
      input: "content/blog",
      output: "blog",
      layouts: "../../_layouts",
      includes: "../../_includes",
      data: "../../_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
