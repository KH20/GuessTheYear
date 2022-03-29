/// <reference types="cypress"/>

//todo Check Submit and Give Up Buttons

describe("Desktop Button Tests", function () {
    it("Get Song Clue", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get(".MuiPaper-root").should("not.exist");
        cy.get("#submit-button").click();
        cy.get("#getSongButton").click();
        cy.get(".MuiPaper-root").should("exist");
        cy.get("#music-header").should("exist");
        cy.get("li.slide.selected > div.music").should("exist");
        cy.get("li.slide.selected > div.movies").should("not.exist");
        cy.get("li.slide.selected > div.games").should("not.exist");
        cy.get("li.slide.selected > div.events").should("not.exist");
    });

    it("Get Movie Clue", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get(".MuiPaper-root").should("not.exist");
        cy.get("#submit-button").click();
        cy.get("#getMovieButton").click();
        cy.get("li.slide.selected > div.movies").should("exist");
        cy.get("li.slide.selected > div.music").should("not.exist");
        cy.get("li.slide.selected > div.games").should("not.exist");
        cy.get("li.slide.selected > div.events").should("not.exist");
    });

    it("Get Game Clue", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get(".MuiPaper-root").should("not.exist");
        cy.get("#submit-button").click();
        cy.get("#getGameButton").click();
        cy.get("li.slide.selected > div.movies").should("not.exist");
        cy.get("li.slide.selected > div.music").should("not.exist");
        cy.get("li.slide.selected > div.games").should("exist");
        cy.get("li.slide.selected > div.events").should("not.exist");
    });

    it("Get Event Clue", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get(".MuiPaper-root").should("not.exist");
        cy.get("#submit-button").click();
        cy.get("#getEventButton").click();
        cy.get("li.slide.selected > div.movies").should("not.exist");
        cy.get("li.slide.selected > div.music").should("not.exist");
        cy.get("li.slide.selected > div.games").should("not.exist");
        cy.get("li.slide.selected > div.events").should("exist");
    });

    it("Test Arrow Keys", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get(".MuiPaper-root").should("not.exist");
        cy.get("#submit-button").click();
        cy.get(".carousel-root").type("{rightArrow}");
        cy.get("li.slide.selected > div.movies").should("exist");
        cy.get(".carousel-root").type("{leftArrow}");
        cy.get("li.slide.selected > div.music").should("exist");
    });

    it("Open Options", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get("#optionsButton").click();
        cy.get("#transition-modal-title").contains("Settings");
    });

    it("Open Tutorial", function () {
        cy.viewport(1920, 1080);
        cy.visit("http://localhost:3000");
        cy.get("#tutorialButton").click();
        cy.get("#tutorialTitle").contains("Guess The Year Tutorial");
    });
});
