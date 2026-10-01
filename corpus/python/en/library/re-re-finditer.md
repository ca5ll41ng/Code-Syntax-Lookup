---
id: "python-en-function-re-finditer"
language: "python"
lang: "en"
category: "function"
name: "finditer"
signature: "finditer(pattern, string, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.finditer"
license: "PSF"
updated: "2026-10-01"
---

# finditer

Return an `iterator` yielding `~re.Match` objects over
all non-overlapping matches for the RE *pattern* in *string*.  The *string*
is scanned left-to-right, and matches are returned in the order found.  Empty
matches are included in the result.

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

> *Changed in 3.7*: Non-empty matches can now start just after a previous empty match.
