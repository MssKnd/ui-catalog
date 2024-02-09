import { describe, expect, test } from "vitest";
import {
	camel2KebabCase,
	cn,
	isEmpty,
	isFalsyExcludingZero,
	isTrue,
	isUndefined,
} from "./utils.ts";

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
		// true
		expect(isTrue(true)).toBe(true);
		// false
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
		// true
		expect(isUndefined(undefined)).toBe(true);
		// false
		expect(isUndefined(true)).toBe(false);
		expect(isUndefined(1)).toBe(false);
		expect(isUndefined("undefined")).toBe(false);
		expect(isUndefined(null)).toBe(false);
		expect(isUndefined({})).toBe(false);
	});
});

describe("isFalsyExcludingZero", () => {
	test("returns true for false, null, undefined, empty string, and NaN", () => {
		// true
		expect(isFalsyExcludingZero(false)).toBe(true);
		expect(isFalsyExcludingZero(null)).toBe(true);
		expect(isFalsyExcludingZero(undefined)).toBe(true);
		expect(isFalsyExcludingZero("")).toBe(true);
		expect(isFalsyExcludingZero(Number.NaN)).toBe(true);
		// false
		expect(isFalsyExcludingZero(true)).toBe(false);
		expect(isFalsyExcludingZero(0)).toBe(false);
		expect(isFalsyExcludingZero("false")).toBe(false);
	});
});

describe("camel2KebabCase", () => {
	test("converts camelCase to kebab-case", () => {
		expect(camel2KebabCase("camelCase")).toBe("camel-case");
		expect(camel2KebabCase("superCamelCase")).toBe("super-camel-case");
		expect(camel2KebabCase("camelCase1")).toBe("camel-case-1");
	});
});

describe("classNames", () => {
	test("returns an empty string when no arguments are passed", () => {
		expect(cn()).toStrictEqual({ className: "" });
	});

	test("returns a string of class names", () => {
		expect(
			cn("default_1 default_2", {
				a: 1,
				b: "2",
				c: undefined,
				d: true,
				e: 0,
				camelCase1: true,
				camelCase2: 0,
			}),
		).toStrictEqual({
			className:
				"default_1 default_2 a_1 b_2 d e_0 camel-case-1 camel-case-2_0",
		});
	});

	test("returns a string of class names without duplication", () => {
		expect(cn("default_1 default_1", { default: 1 })).toStrictEqual({
			className: "default_1",
		});
	});
});
