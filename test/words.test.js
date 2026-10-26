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
test("longestWord returns the longest whitespace-delimited token", () => {
  assert.strictEqual(longestWord("a quick  brownish fox"), "brownish");
  assert.strictEqual(longestWord("  padded\tvalue\n"), "padded");
});
test("longestWord keeps punctuation inside its token", () => {
  assert.strictEqual(longestWord("hi, wonderful world!"), "wonderful");
  assert.strictEqual(longestWord("see (well-known) now"), "(well-known)");
});
test("longestWord picks the first token on a tie", () => {
  assert.strictEqual(longestWord("ab cd ef"), "ab");
  assert.strictEqual(longestWord("cat dog bird fish"), "bird");
});
test("longestWord returns an empty string for blank or whitespace-only input", () => {
  assert.strictEqual(longestWord(""), "");
  assert.strictEqual(longestWord("   \t\n  "), "");
});
