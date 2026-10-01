---
id: "python-en-function-locale-normalize"
language: "python"
lang: "en"
category: "function"
name: "normalize"
signature: "normalize(localename)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.normalize"
license: "PSF"
updated: "2026-10-01"
---

# normalize

Returns a normalized locale code for the given locale name.  The returned locale
code is formatted for use with `setlocale`.  If normalization fails, the
original name is returned unchanged.

If the given encoding is not known, the function defaults to the default
encoding for the locale code just like `setlocale`.
