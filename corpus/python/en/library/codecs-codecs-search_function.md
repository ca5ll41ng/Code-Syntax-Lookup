---
id: "python-en-function-codecs-search_function"
language: "python"
lang: "en"
category: "function"
name: "search_function"
signature: "search_function(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.search_function"
license: "PSF"
updated: "2026-10-01"
---

# search_function

Search for the codec module corresponding to the given encoding name
*encoding*.

This function first normalizes the *encoding* using
`normalize_encoding`, then looks for a corresponding alias.
It attempts to import a codec module from the encodings package using either
the alias or the normalized name. If the module is found and defines a valid
`getregentry()` function that returns a `codecs.CodecInfo` object,
the codec is cached and returned.

If the codec module defines a `getaliases()` function any returned aliases
are registered for future use.
