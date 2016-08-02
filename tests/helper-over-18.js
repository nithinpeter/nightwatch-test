module.exports = {
    'Helper Over 18 Signup': function (browser) {

        var signup = browser.page.signup();

        signup.navigate().
            expect.section("@userTypeSection").to.be.visible;
        
        var userTypeSection = signup.section.userTypeSection;
        userTypeSection.click("@chooseHelper");
        userTypeSection.click("@nextButton");
        
        browser.pause(5000);

        signup.expect.section("@helpWithSection").to.be.visible;
        
        var helpWithSection = signup.section.helpWithSection;
        helpWithSection.waitForElementVisible("@nextButton", 5000);
        helpWithSection.click("@nextButton");

        browser.pause(5000);

        signup.expect.section("@addressSection").to.be.visible;

        var addressSection = signup.section.addressSection;
        addressSection.waitForElementVisible("@nextButton", 5000);
        addressSection.setValue("@addressLine1", "Brook St");
        addressSection.setValue("@suburb", "Coogee");
        addressSection.setValue("@state", "nsw");
        addressSection.setValue("@postCode", 2025);
        addressSection.click("@nextButton");

        browser.pause(5000);

        signup.expect.section("@detailsStep1Section").to.be.visible;

        var detailsStep1Section = signup.section.detailsStep1Section;
        detailsStep1Section.waitForElementVisible("@nextButton", 5000);
        detailsStep1Section.setValue("@firstName", "Test");
        detailsStep1Section.setValue("@lastName", "Helper");

        var testEmail = `testhelper${Date.now()}@jugglestreet.com`;

        detailsStep1Section.setValue("@email", testEmail);
        detailsStep1Section.setValue("@confirmEmail", testEmail);
        detailsStep1Section.setValue("@password", "TEST_PASSWORD");
        detailsStep1Section.setValue("@confirmPassword", "TEST_PASSWORD");
        detailsStep1Section.click("@nextButton");
        
        browser.pause(5000);

        signup.expect.section("@detailsStep2Section").to.be.visible;

        var detailsStep2Section = signup.section.detailsStep2Section;
        detailsStep2Section.waitForElementVisible("@nextButton", 5000);
        detailsStep2Section.click("@gender");
        detailsStep2Section.setValue("@dateOfBirth", "01/01/1990");
        detailsStep2Section.setValue("@phoneNumber", "0400000000");
        detailsStep2Section.setValue("@confirmPhoneNumber", "0400000000");

        detailsStep2Section.click("@nextButton");

        browser.pause(10000);

        signup.expect.section("@welcomeHelperSection").to.be.visible;
        
        var welcomeHelperSection = signup.section.welcomeHelperSection;
        welcomeHelperSection.click("@startButton", function (res) {
            this.assert.ok(true, "Signup Success");
        });

        browser.pause(5000);
    },

    "Helper Over 18 Profile Wizard" : function (browser) {
        var profileWizard = browser.page.profileWizard();

        profileWizard.expect.section("@uploadPhotoSection").to.be.visible;

        var uploadPhotoSection = profileWizard.section.uploadPhotoSection;
        uploadPhotoSection.waitForElementVisible("@nextButton", 5000);
        uploadPhotoSection.click("@nextButton");

        browser.pause(5000);

        profileWizard.expect.section("@helperIntroduceSection").to.be.visible;

        var helperIntroduceSection = profileWizard.section.helperIntroduceSection;
        helperIntroduceSection.waitForElementVisible("@nextButton", 5000);
        helperIntroduceSection.setValue("@introduction", "TEST INTRODUCTION");
        helperIntroduceSection.setValue("@experience", "TEST EXPERIENCE");
        helperIntroduceSection.click("@nextButton");
        
        browser.pause(10000);

        profileWizard.expect.section("@dashboard").to.be.visible;

        browser.end();
    }
};