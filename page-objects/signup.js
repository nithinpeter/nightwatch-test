var config = require("../helpers/config");
var pageManager = require("../helpers/page-manager");
// var layout = require("./layout");

var pageObject = {
  url: config.getBaseUrl() + "#signup-family-or-helper",
  sections: {
    userTypeSection: {
      selector: "#signup-family-or-helper",
      elements: {
        chooseFamily: "label[for='choose-family']",
        chooseHelper: "label[for='choose-helper']",
        // nextButton: "footer .km-rightitem",
      }
    },
    addressSection: {
      selector: "#signup-enter-address",
      elements: {
        addressLine1: "input[name='Address Line']",
        suburb: "input[name='Suburb']",
        state: "select[name='State']",
        postCode: "input[name='Postcode']",
        // nextButton: "footer .km-rightitem",
      }
    },
    helpWithSection: {
      selector: "#signup-help-with",
      elements: {
        helpWithList: ".help-with-list",
        babysitting: "ul.help-with-list li button[value=1]",
        nannying: "ul.help-with-list li button[value=2]",
        // nextButton: "#signup-help-with footer .km-rightitem",
      }
    },
    detailsStep1Section: {
      selector: "#signup-your-details-step1",
      elements: {
        firstName: "input[name='First Name']",
        lastName: "input[name='Last Name']",
        email: "input[name='Email']",
        confirmEmail: "input[name='confirm-email']",
        password: "input[name='Password']",
        confirmPassword: "input[name='confirm-password']",
      }
    },
    detailsStep2Section: {
      selector: "#signup-your-details-step2",
      elements: {
        gender: "#gender-male",
        dateOfBirth: "input[name='Date of Birth']",
        phoneNumber: "input[name='Phone Number']",
        confirmPhoneNumber: "input[name='confirm-phone-number']",
      }
    },
    welcomeHelperSection: {
      selector: "#profile-wizard-welcome-helper",
      elements: {
        startButton: ".km-widget .km-button"
      }
    }
  }
};


module.exports = pageManager.getPageObject(pageObject);