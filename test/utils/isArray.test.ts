import { isArray } from "../../src";

describe("isArray", () => {
    test("should return true for arrays", () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray(["a", "b", "c"])).toBe(true);
    });

    test("should return false for non-arrays", () => {
        expect(isArray({})).toBe(false);
        expect(isArray("string")).toBe(false);
        expect(isArray(123)).toBe(false);
        expect(isArray(null)).toBe(false);
        expect(isArray(undefined)).toBe(false);
        expect(isArray(true)).toBe(false);
        expect(isArray(false)).toBe(false);
        expect(isArray(() => {})).toBe(false);
    });
});