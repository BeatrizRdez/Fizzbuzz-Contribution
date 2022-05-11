const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

        test("Requerimiento 2: Test para ExplorersByStack", () => {
            const explorers = [{"stacks": ["javascript","groovy","elm", "elixir", "reasonML"]}];
            const ExplorersByStack = ExplorerService.filterByStack(explorers, "javascript");
            expect(ExplorersByStack.toEqual)
        });

    });

