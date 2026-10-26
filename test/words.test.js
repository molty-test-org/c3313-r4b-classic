const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, isPalindrome } = require("../src/words");

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
test("isPalindrome ignores case and punctuation", () => {
  assert.strictEqual(isPalindrome("Racecar"), true);
  assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama!"), true);
  assert.strictEqual(isPalindrome("hello"), false);
  assert.strictEqual(isPalindrome(""), true);
  assert.strictEqual(isPalindrome("...!!"), true);
});
