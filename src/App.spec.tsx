/* global cy */
import * as React from "react";
import { mount } from "@cypress/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    cy.intercept("/api/cct/cliquable*", {
      fixture: "cct/cliquable.json",
    }).as("getCaseCliquable");
  });

  it("renders learn react link", () => {
    mount(<App />);
    cy.contains(/learn react/i);
  });
});
