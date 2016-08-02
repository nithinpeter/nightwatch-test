var commands = {
  nextStep: function () {

    return this.waitForElementVisible("@nextButton", 5000).click("@nextButton", function (client) {
      console.log("successfully clicked", client);
    });
  },
  prevStep: function () {
    return this.click("@prevButton");
  }
}

var pageObject = {
  elements: {
    nextButton: "footer .km-rightitem",
    prevButton: "footer .km-leftitem",
  }
};


module.exports = pageObject