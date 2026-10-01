---
id: "python-en-function-urllib-parse-quote_plus"
language: "python"
lang: "en"
category: "function"
name: "quote_plus"
signature: "quote_plus(string, safe='', encoding=None, errors=None)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.quote_plus"
license: "PSF"
updated: "2026-10-01"
---

# quote_plus

Like `quote`, but also replace spaces with plus signs, as required for
quoting HTML form values when building up a query string to go into a URL.
Plus signs in the original string are escaped unless they are included in
*safe*.  It also does not have *safe* default to `'/'`.

Example: `quote_plus('/El Niño/')` yields `'%2FEl+Ni%C3%B1o%2F'`.
