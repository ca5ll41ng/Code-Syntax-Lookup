---
id: "python-en-function-re-search"
language: "python"
lang: "en"
category: "function"
name: "search"
signature: "search(pattern, string, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.search"
license: "PSF"
updated: "2026-10-01"
---

# search

Scan through *string* looking for the first location where the regular expression
*pattern* produces a match, and return a corresponding `~re.Match`. Return
`None` if no position in the string matches the pattern; note that this is
different from finding a zero-length match at some point in the string.

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).
