const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, countVowels } = require("../src/words");

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
test("countVowels counts a, e, i, o, u case-insensitively", () => {
  assert.strictEqual(countVowels("Hello World"), 3);
  assert.strictEqual(countVowels("AEIOU aeiou"), 10);
});
test("countVowels returns 0 without vowels", () => {
  assert.strictEqual(countVowels("xyz"), 0);
  assert.strictEqual(countVowels(""), 0);
});
