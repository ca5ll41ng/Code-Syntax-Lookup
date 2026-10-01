---
id: "python-en-function-urllib-parse-quote"
language: "python"
lang: "en"
category: "function"
name: "quote"
signature: "quote(string, safe='/', encoding=None, errors=None)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.quote"
license: "PSF"
updated: "2026-10-01"
---

# quote

Replace special characters in *string* using the `%{xx}` escape. Letters,
digits, and the characters `'_.-~'` are never quoted. By default, this
function is intended for quoting the path section of a URL. The optional
*safe* parameter specifies additional ASCII characters that should not be
quoted --- its default value is `'/'`.

*string* may be either a `str` or a `bytes` object.

> *Changed in 3.7*: Moved from :rfc:`2396` to :rfc:`3986` for quoting URL strings. "~" is now included in the set of unreserved characters.

The optional *encoding* and *errors* parameters specify how to deal with
non-ASCII characters, as accepted by the `str.encode` method.
Although these parameters default to `None` in the function signature,
when processing `str` inputs, *encoding* effectively defaults to `'utf-8'`
and *errors* to `'strict'`, meaning unsupported characters raise a
`UnicodeEncodeError`.
*encoding* and *errors* must not be supplied if *string* is a
`bytes`, or a `TypeError` is raised.

Note that `quote(string, safe, encoding, errors)` is equivalent to
`quote_from_bytes(string.encode(encoding, errors), safe)`.

Example: `quote('/El Niño/')` yields `'/El%20Ni%C3%B1o/'`.
