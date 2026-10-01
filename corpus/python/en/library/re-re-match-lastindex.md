---
id: "python-en-function-re-match-lastindex"
language: "python"
lang: "en"
category: "function"
name: "Match.lastindex"
directive: "attribute"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.lastindex"
license: "PSF"
updated: "2026-10-01"
---

# Match.lastindex

The integer index of the last matched capturing group, or `None` if no group
was matched at all. For example, the expressions `(a)b`, `((a)(b))`, and
`((ab))` will have `lastindex == 1` if applied to the string `'ab'`, while
the expression `(a)(b)` will have `lastindex == 2`, if applied to the same
string.
