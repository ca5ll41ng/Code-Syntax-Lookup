---
id: "python-en-function-urllib-parse-urlunsplit"
language: "python"
lang: "en"
category: "function"
name: "urlunsplit"
signature: "urlunsplit(parts)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlunsplit"
license: "PSF"
updated: "2026-10-01"
---

# urlunsplit

Construct a URL from a tuple as returned by `urlsplit`. The *parts*
argument can be any five-item iterable.

This may result in a slightly different, but equivalent URL, if the
URL that was parsed originally had unnecessary delimiters (for example,
a `?` with an empty query; the RFC states that these are equivalent).

If *keep_empty* is true, empty strings are kept in the result (for example,
a `?` for an empty query), only `None` components are omitted.
This allows rebuilding a URL that was parsed with option
`missing_as_none=True`.
By default, *keep_empty* is true if *parts* is the result of the
`urlsplit` call with `missing_as_none=True`.

> *Changed in 3.15*: Added the *keep_empty* parameter.
