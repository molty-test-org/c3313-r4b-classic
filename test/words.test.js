const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, endsWithVowel } = require("../src/words");

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
test("endsWithVowel is true for vowel endings in either case", () => {
  for (const word of ["tree", "idea", "hi", "go", "menu", "TREE", "Idea", "GO", "MENU"]) {
    assert.strictEqual(endsWithVowel(word), true, word);
  }
});
test("endsWithVowel is false for consonant endings and empty input", () => {
  for (const word of ["cat", "Dog", "rhythm", "y", ""]) {
    assert.strictEqual(endsWithVowel(word), false, word);
  }
});
