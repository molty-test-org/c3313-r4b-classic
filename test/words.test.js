const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, countSentences } = require("../src/words");

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
test("countSentences counts period, exclamation and question endings", () => {
  assert.strictEqual(countSentences("Hi. Wow! Really?"), 3);
});
test("countSentences counts repeated marks once", () => {
  assert.strictEqual(countSentences("Wait?! Yes..."), 2);
});
test("countSentences counts an unfinished trailing phrase as one sentence", () => {
  assert.strictEqual(countSentences("Hi. and then"), 2);
  assert.strictEqual(countSentences("no ending here"), 1);
});
test("countSentences returns zero for blank text", () => {
  assert.strictEqual(countSentences(""), 0);
  assert.strictEqual(countSentences("   \n\t "), 0);
});
