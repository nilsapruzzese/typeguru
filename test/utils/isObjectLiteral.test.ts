import { isObjectLiteral } from "../../src";

describe('isObjectLiteral', () => {
    it('should return true for an object literal', () => {
        expect(isObjectLiteral({})).toBe(true);
        expect(isObjectLiteral({ key: 'value' })).toBe(true);
        expect(isObjectLiteral({ 0: 'value' })).toBe(true);
    });

    it('should return false for non-object literals', () => {
        expect(isObjectLiteral(null)).toBe(false);
        expect(isObjectLiteral(undefined)).toBe(false);
        expect(isObjectLiteral(123)).toBe(false);
        expect(isObjectLiteral('string')).toBe(false);
        expect(isObjectLiteral([])).toBe(false);
        expect(isObjectLiteral(new Map())).toBe(false);
        expect(isObjectLiteral(new Set())).toBe(false);
        expect(isObjectLiteral(() => {})).toBe(false);
        expect(isObjectLiteral(/regex/)).toBe(false);
        expect(isObjectLiteral(new Date())).toBe(false);
    });

    it('should return true for objects created with object literal notation', () => {
        const obj = { a: 1, b: 2 };
        expect(isObjectLiteral(obj)).toBe(true);
    });

    it('should return false for arrays', () => {
        expect(isObjectLiteral([1, 2, 3])).toBe(false);
    });

    it('should return false for functions', () => {
        expect(isObjectLiteral(() => {})).toBe(false);
    });
});