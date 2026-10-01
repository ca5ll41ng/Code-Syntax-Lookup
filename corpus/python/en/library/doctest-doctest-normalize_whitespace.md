---
id: "python-en-function-doctest-normalize_whitespace"
language: "python"
lang: "en"
category: "function"
name: "NORMALIZE_WHITESPACE"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.NORMALIZE_WHITESPACE"
license: "PSF"
updated: "2026-10-01"
---

# NORMALIZE_WHITESPACE

When specified, all sequences of whitespace (blanks and newlines) are treated as
equal.  Any sequence of whitespace within the expected output will match any
sequence of whitespace within the actual output. By default, whitespace must
match exactly. `NORMALIZE_WHITESPACE` is especially useful when a line of
expected output is very long, and you want to wrap it across multiple lines in
your source.
