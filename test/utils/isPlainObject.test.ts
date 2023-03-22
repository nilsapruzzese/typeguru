import { isPlainObject } from "../../src";

describe('isPlainObject', () => {
    test('should return true for plain objects', () => {
        expect(isPlainObject({})).toBe(true);
        expect(isPlainObject({ foo: 'bar' })).toBe(true);
        expect(isPlainObject(new Object())).toBe(true);
    });

    test('should return false for non-plain objects', () => {
        expect(isPlainObject([])).toBe(false);
        expect(isPlainObject(null)).toBe(false);
        expect(isPlainObject(undefined)).toBe(false);
        expect(isPlainObject(new Date())).toBe(false);
        expect(isPlainObject(/regex/)).toBe(false);
        expect(isPlainObject(new Map())).toBe(false);
        expect(isPlainObject(new Set())).toBe(false);
        expect(isPlainObject(new Error())).toBe(false);
        expect(isPlainObject(Object)).toBe(false);
        expect(isPlainObject(Function)).toBe(false);
        expect(isPlainObject(() => {})).toBe(false);
        expect(isPlainObject(1)).toBe(false);
        expect(isPlainObject('string')).toBe(false);
        expect(isPlainObject(true)).toBe(false);
        expect(isPlainObject(Symbol())).toBe(false);
    });
});