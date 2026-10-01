---
id: "python-en-function-urllib-parse-unquote_plus"
language: "python"
lang: "en"
category: "function"
name: "unquote_plus"
signature: "unquote_plus(string, encoding='utf-8', errors='replace')"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.unquote_plus"
license: "PSF"
updated: "2026-10-01"
---

# unquote_plus

Like `unquote`, but also replace plus signs with spaces, as required
for unquoting HTML form values.

*string* must be a `str`.

Example: `unquote_plus('/El+Ni%C3%B1o/')` yields `'/El Niño/'`.
