---
id: "python-en-function-locale-getlocale"
language: "python"
lang: "en"
category: "function"
name: "getlocale"
signature: "getlocale(category=LC_CTYPE)"
directive: "function"
module: "locale"
source_url: "https://docs.python.org/3/library/locale.html#locale.getlocale"
license: "PSF"
updated: "2026-10-01"
---

# getlocale

Returns the current setting for the given locale category as a tuple containing
the language code and encoding. *category* may be one of the `LC_\*`
values except `LC_ALL`.  It defaults to `LC_CTYPE`.

The language code has the same format as a `locale name`,
but without encoding.
The language code and encoding may be `None` if their values cannot be
determined.
The "C" locale is represented as `(None, None)`.

> *Changed in 3.15*: ``@``-modifier are no longer silently removed, but included in the language code.
