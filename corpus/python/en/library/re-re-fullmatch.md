---
id: "python-en-function-re-fullmatch"
language: "python"
lang: "en"
category: "function"
name: "fullmatch"
signature: "fullmatch(pattern, string, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.fullmatch"
license: "PSF"
updated: "2026-10-01"
---

# fullmatch

If the whole *string* matches the regular expression *pattern*, return a
corresponding `~re.Match`.  Return `None` if the string does not match
the pattern; note that this is different from a zero-length match.

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

> *Added in 3.4*
