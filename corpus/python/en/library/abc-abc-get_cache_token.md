---
id: "python-en-function-abc-get_cache_token"
language: "python"
lang: "en"
category: "function"
name: "get_cache_token"
signature: "get_cache_token()"
directive: "function"
module: "abc"
source_url: "https://docs.python.org/3/library/abc.html#abc.get_cache_token"
license: "PSF"
updated: "2026-10-01"
---

# get_cache_token

Returns the current abstract base class cache token.

The token is an opaque object (that supports equality testing) identifying
the current version of the abstract base class cache for virtual subclasses.
The token changes with every call to `ABCMeta.register` on any ABC.

> *Added in 3.4*
