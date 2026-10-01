---
id: "python-en-function-codecs-lookup"
language: "python"
lang: "en"
category: "function"
name: "lookup"
signature: "lookup(encoding, /)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.lookup"
license: "PSF"
updated: "2026-10-01"
---

# lookup

Looks up the codec info in the Python codec registry and returns a
`CodecInfo` object as defined below.

This function first normalizes the *encoding*: all ASCII letters are
converted to lower case, spaces are replaced with hyphens.
Then encoding is looked up in the registry's cache. If not found, the list of
registered search functions is scanned. If no `CodecInfo` object is
found, a `LookupError` is raised. Otherwise, the `CodecInfo` object
is stored in the cache and returned to the caller.

> *Changed in 3.9*: Any characters except ASCII letters and digits and a dot are converted to underscore.

> *Changed in 3.15*: No characters are converted to underscore anymore. Spaces are converted to hyphens.
