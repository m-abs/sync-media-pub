module.exports = function(eleventyConfig) {
    let options = {
        html: true
    };
    let markdownLib = require("markdown-it")(options)
        .use(require("markdown-it-anchor"))
        .use(require("markdown-it-attrs"))
        .use(require('markdown-it-header-sections'))
        .use(require("markdown-it-table-of-contents"))
        .use(require("markdown-it-deflist"), 
            {
                "includeLevel": [2],
                "containerHeaderHtml": `<p class="toclabel">Contents:<p>`
            });
    
    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addPassthroughCopy({"css": "css"});

    return {
        dir: {
            input: "pages",
            output: "../docs/new",
            includes: "../_layout"
        }
    };
  };