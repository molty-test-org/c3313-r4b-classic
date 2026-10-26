const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, startsWithVowel } = require("../src/words");

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
test("startsWithVowel checks the first letter, ignoring case", () => {
  assert.strictEqual(startsWithVowel("apple"), true);
  assert.strictEqual(startsWithVowel("Egg"), true);
  assert.strictEqual(startsWithVowel("IGLOO"), true);
  assert.strictEqual(startsWithVowel("orange"), true);
  assert.strictEqual(startsWithVowel("Umbrella"), true);
  assert.strictEqual(startsWithVowel("banana"), false);
  assert.strictEqual(startsWithVowel(""), false);
  assert.strictEqual(startsWithVowel(" apple"), false);
  assert.strictEqual(startsWithVowel("1st"), false);
});
test("startsWithVowel returns false for an uncoercible input", () => {
  assert.strictEqual(startsWithVowel(Object.create(null)), false);
});
