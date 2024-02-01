import { describe, expect, test } from "vitest";
import { isEmpty } from "./utils.ts";

describe("isEmpty", () => {
	test("returns true for empty object", () => {
		expect(isEmpty({})).toBe(true);
	});

	test("returns false for non-empty object", () => {
		expect(isEmpty({ a: 1 })).toBe(false);
	});
});
