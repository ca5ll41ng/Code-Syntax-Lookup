---
id: "python-en-function-re-pattern-fullmatch"
language: "python"
lang: "en"
category: "function"
name: "Pattern.fullmatch"
signature: "Pattern.fullmatch(string[, pos[, endpos]])"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Pattern.fullmatch"
license: "PSF"
updated: "2026-10-01"
---

# Pattern.fullmatch

If the whole *string* matches this regular expression, return a corresponding
`~re.Match`.  Return `None` if the string does not match the pattern;
note that this is different from a zero-length match.

The optional *pos* and *endpos* parameters have the same meaning as for the
`~Pattern.search` method. ::

   >>> pattern = re.compile("o[gh]")
   >>> pattern.fullmatch("dog")      # No match as "o" is not at the start of "dog".
   >>> pattern.fullmatch("ogre")     # No match as not the full string matches.
   >>> pattern.fullmatch("doggie", 1, 3)   # Matches within given limits.
   <re.Match object; span=(1, 3), match='og'>

> *Added in 3.4*
