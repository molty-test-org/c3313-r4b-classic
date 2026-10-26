const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, capitalizeWords } = require("../src/words");

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
test("capitalizeWords uppercases each word's initial", () => {
  assert.strictEqual(capitalizeWords("the quick brown fox"), "The Quick Brown Fox");
});
test("capitalizeWords preserves repeated whitespace", () => {
  assert.strictEqual(capitalizeWords("  one   two\tthree  "), "  One   Two\tThree  ");
});
test("capitalizeWords preserves punctuation and mixed-case remainder", () => {
  assert.strictEqual(capitalizeWords("hello, wORLD! it's fine"), "Hello, WORLD! It's Fine");
});
test("capitalizeWords keeps empty input empty and coerces non-strings", () => {
  assert.strictEqual(capitalizeWords(""), "");
  assert.strictEqual(capitalizeWords(42), "42");
});
test("capitalizeWords uppercases supplementary-plane initials as whole code points", () => {
  assert.strictEqual(capitalizeWords("\u{10428} word"), "\u{10400} Word");
});
