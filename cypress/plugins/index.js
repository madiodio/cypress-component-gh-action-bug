require("@cypress/instrument-cra");

if (typeof Cypress !== "undefined") {
  // @ts-ignore
  process.env = Cypress.env();
}

module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  if (config.testingType === "component") {
    require("@cypress/react/plugins/react-scripts")(on, config);
  }
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
