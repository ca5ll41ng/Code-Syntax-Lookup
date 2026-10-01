---
id: "python-en-function-urllib-parse-urlparse"
language: "python"
lang: "en"
category: "function"
name: "urlparse"
signature: "urlparse(urlstring, scheme=None, allow_fragments=True, *, missing_as_none=False)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlparse"
license: "PSF"
updated: "2026-10-01"
---

# urlparse

This is similar to `urlsplit`, but additionally splits the *path*
component on *path* and *params*.
This function returns a 6-item `named tuple` `ParseResult`
or `ParseResultBytes`.
Its items are the same as for the `urlsplit` result, except that
*params* is inserted at index 3, between *path* and *query*.

This function is based on obsoleted RFC 1738 and RFC 1808, which
listed *params* as the main URL component.
The more recent URL syntax allows parameters to be applied to each segment
of the *path* portion of the URL (see RFC 3986).
`urlsplit` should generally be used instead of `urlparse`.
A separate function is needed to separate the path segments and parameters.
