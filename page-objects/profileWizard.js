var config = require("../helpers/config");
var pageManager = require("../helpers/page-manager");
// var layout = require("./layout");

var pageObject = {
  url: config.getBaseUrl() + "#signup-family-or-helper",
  sections: {
    welcomeHelperSection: {
      selector: "#profile-wizard-welcome-helper",
      elements: {
        startButton: ".km-widget .km-button"
      }
    },
    uploadPhotoSection: {
        selector: "#profile-wizard-upload-profile-photo",
        elements: { 
            
        }
    },
    helperIntroduceSection: {
        selector: "#profile-wizard-introduce-yourself",
        elements: {
            introduction: "textarea[name='intro-helper']",
            experience: "textarea[name='experience-helper']"
        }
    },
    dashboard: {
      selector: "#jugglers-dashboard",
      elements: {
        
      }
    }
  }
};


module.exports = pageManager.getPageObject(pageObject);