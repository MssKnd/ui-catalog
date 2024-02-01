import { describe, expect, test } from "vitest";
import { classNames, isEmpty, isTrue, isUndefined } from "./utils.ts";

describe("isEmpty", () => {
	test("returns true for empty object", () => {
		expect(isEmpty({})).toBe(true);
	});

	test("returns false for non-empty object", () => {
		expect(isEmpty({ a: 1 })).toBe(false);
	});
});

describe("isTrue", () => {
	test("returns true for true", () => {
		expect(isTrue(true)).toBe(true);
	});

	test("It returns false if the value is anything other than true.", () => {
		expect(isTrue(false)).toBe(false);
		expect(isTrue(1)).toBe(false);
		expect(isTrue("true")).toBe(false);
		expect(isTrue(undefined)).toBe(false);
		expect(isTrue(null)).toBe(false);
		expect(isTrue({})).toBe(false);
	});
});

describe("isUndefined", () => {
	test("returns true for undefined", () => {
		expect(isUndefined(undefined)).toBe(true);
	});

	test("returns false for non-undefined", () => {
		expect(isUndefined(true)).toBe(false);
		expect(isUndefined(1)).toBe(false);
		expect(isUndefined("undefined")).toBe(false);
		expect(isUndefined(null)).toBe(false);
		expect(isUndefined({})).toBe(false);
	});
});

describe("classNames", () => {
	test("returns a string of class names", () => {
		expect(classNames({ a: 1, b: "2", c: undefined, d: true })).toBe(
			"a:1 b:2 d",
		);
	});
});
