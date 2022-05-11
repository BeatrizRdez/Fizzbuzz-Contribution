const ExplorerController = require("../../lib/controllers/ExplorerController")

describe("Test ExplorerController", () => {
    test("Requerimiento 2: Test para ExplorersByStack", () => {
        const ExplorersByStack = ExplorerController.filterByStack("javascript");
        expect(ExplorersByStack.toEqual)

    });

});
