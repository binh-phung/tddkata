const {canMakeAWord} = require("./wordChecker");

describe("abc problem spec",() => {
    it("infrastructure is working well", () => {
        expect(true).toBe(true);
    });
    describe("can make work check",() => {
        it("word A is a word",() => {
            expect(canMakeAWord("A")).toBe(true);
        });
    });
})