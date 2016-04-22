var config = require('../config');

module.exports = {
    'test login': function (browser) {
        browser
            .url(config.dev.baseUrl)
            .waitForElementVisible('body', 10000)
            .click('.login-link > a')
            .waitForElementVisible('form.form', 10000)
            .click('input[type=email]')
            .setValue('input[type=email]', 'nithinpeter7@gmail.com')
            .click('input[type=password]')
            .setValue('input[type=password]', 'malayalam')
            .click('button[type=submit]')
            .pause(5000)
            .assert.containsText('header', 'Nithin')
            .end();
    }
};