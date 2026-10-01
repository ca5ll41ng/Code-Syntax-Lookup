---
id: "python-en-function-string-capwords"
language: "python"
lang: "en"
category: "function"
name: "capwords"
signature: "capwords(s, sep=None)"
directive: "function"
module: "string"
source_url: "https://docs.python.org/3/library/string.html#string.capwords"
license: "PSF"
updated: "2026-10-01"
---

# capwords

Split the argument into words using `str.split`, capitalize each word
using `str.capitalize`, and join the capitalized words using
`str.join`.  If the optional second argument *sep* is absent
or `None`, runs of whitespace characters are replaced by a single space
and leading and trailing whitespace are removed, otherwise *sep* is used to
split and join the words.
