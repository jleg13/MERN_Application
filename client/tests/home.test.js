module.exports = {
  "default e2e tests": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible(".App")
      .assert.title("React Redux App")
      .assert.elementPresent(".App-logo")
      .end();
  }
};
