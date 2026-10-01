---
id: "python-en-function-re-pattern-prefixmatch"
language: "python"
lang: "en"
category: "function"
name: "Pattern.prefixmatch"
signature: "Pattern.prefixmatch(string[, pos[, endpos]])"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Pattern.prefixmatch"
license: "PSF"
updated: "2026-10-01"
---

# Pattern.prefixmatch

If zero or more characters at the *beginning* of *string* match this regular
expression, return a corresponding `~re.Match`. Return `None` if the
string does not match the pattern; note that this is different from a
zero-length match.

Note that even in `MULTILINE` mode, this will only match at the
beginning of the string and not at the beginning of each line.

The optional *pos* and *endpos* parameters have the same meaning as for the
`~Pattern.search` method. ::

   >>> pattern = re.compile("o")
   >>> pattern.prefixmatch("dog")     # No match as "o" is not at the start of "dog".
   >>> pattern.prefixmatch("dog", 1)  # Match as "o" is the 2nd character of "dog".
   <re.Match object; span=(1, 2), match='o'>

If you want to locate a match anywhere in *string*, use
`~Pattern.search` instead (see also `search-vs-match`).

This method now has two names and has long been known as
`~Pattern.match`.  Use that name when you need to retain compatibility
with older Python versions.

> *Added in 3.15*
