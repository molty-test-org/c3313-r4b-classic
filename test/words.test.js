const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, longestWord } = require("../src/words");

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
test("longestWord returns the longest whitespace-separated token", () => {
  assert.strictEqual(longestWord("a quick brownish fox"), "brownish");
  assert.strictEqual(longestWord("  one   three  "), "three");
});
test("longestWord keeps punctuation in the token", () => {
  assert.strictEqual(longestWord("hi, wonderful world!"), "wonderful");
  assert.strictEqual(longestWord("ok go!!!"), "go!!!");
});
test("longestWord returns an empty string for blank input", () => {
  assert.strictEqual(longestWord(""), "");
  assert.strictEqual(longestWord("  \t\n "), "");
});
test("longestWord keeps the first token on a length tie", () => {
  assert.strictEqual(longestWord("ab wxyz cdef"), "wxyz");
  assert.strictEqual(longestWord("red blue tan"), "blue");
});
