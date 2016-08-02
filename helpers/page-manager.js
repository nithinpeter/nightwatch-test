var _ = require("underscore");
var layout = require("../page-objects/_layout");


function getPageObject(page) {
    Object.keys(page.sections).map(function (key) {
        var section = page.sections[key];

        var parentSelector = section.selector;

        var elements = Object.assign({}, layout.elements);

        Object.keys(elements).map(function (key) {
            elements[key] = parentSelector + " " + elements[key];
        }) 

        return _.extend(section.elements, elements);
    })

    return page;
}




module.exports = {
    getPageObject: getPageObject,
}