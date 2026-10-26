const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, countConsonants } = require("../src/words");

test("countWords counts whitespace-separated words", () => {
  assert.strictEqual(countWords("one two  three"), 3);
  assert.strictEqual(countWords("   "), 0);
});
test("slugify makes a url slug", () => {
  assert.strictEqual(slugify("Hello, World!"), "hello-world");
});
test("truncate shortens with an ellipsis", () => {
  assert.strictEqual(truncate("abcdef", 4), "abc…");
  assert.strictEqual(truncate("abc", 4), "abc");
});
test("countConsonants counts ASCII consonants case-insensitively, y included", () => {
  assert.strictEqual(countConsonants("Hello WORLD"), 7);
  assert.strictEqual(countConsonants("Rhythm"), 6);
});
test("countConsonants ignores vowels, empty input and nonletters", () => {
  assert.strictEqual(countConsonants("aeiouAEIOU"), 0);
  assert.strictEqual(countConsonants(""), 0);
  assert.strictEqual(countConsonants("1234 !?-"), 0);
});
test("countConsonants converts input with String()", () => {
  assert.strictEqual(countConsonants(12345), 0);
  assert.strictEqual(countConsonants(["b", "c"]), 2);
});
