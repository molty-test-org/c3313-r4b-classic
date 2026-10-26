const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, reverseWords } = require("../src/words");

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
test("reverseWords reverses word order", () => {
  assert.strictEqual(reverseWords("one two three"), "three two one");
});
test("reverseWords normalizes repeated whitespace", () => {
  assert.strictEqual(reverseWords("  one   two\t\tthree  "), "three two one");
});
test("reverseWords keeps punctuation with its word", () => {
  assert.strictEqual(reverseWords("Hello, world! Bye."), "Bye. world! Hello,");
});
test("reverseWords returns an empty string when there are no words", () => {
  assert.strictEqual(reverseWords("   "), "");
  assert.strictEqual(reverseWords(""), "");
});
