// Small text helpers the fixture app exposes.
function countWords(text) {
  const t = String(text).trim();
  return t === "" ? 0 : t.split(/\s+/).length;
}
function slugify(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function truncate(text, max) {
  const s = String(text);
  return s.length <= max ? s : s.slice(0, Math.max(0, max - 1)) + "…";
}
function longestWord(text) {
  const t = String(text).trim();
  if (t === "") return "";
  let best = "";
  for (const token of t.split(/\s+/)) {
    if (token.length > best.length) best = token;
  }
  return best;
}
module.exports = { countWords, slugify, truncate, longestWord };
