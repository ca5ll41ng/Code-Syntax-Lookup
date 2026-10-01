---
id: "python-en-function-string-templatelib-convert"
language: "python"
lang: "en"
category: "function"
name: "convert"
signature: "convert(obj, /, conversion)"
directive: "function"
module: "string.templatelib"
source_url: "https://docs.python.org/3/library/string.templatelib.html#string.templatelib.convert"
license: "PSF"
updated: "2026-10-01"
---

# convert

Applies formatted string literal `conversion`
semantics to the given object *obj*.
This is frequently useful for custom template string processing logic.

Three conversion flags are currently supported:

* `'s'` which calls `str` on the value (like `!s`),
* `'r'` which calls `repr` (like `!r`), and
* `'a'` which calls `ascii` (like `!a`).

If the conversion flag is `None`, *obj* is returned unchanged.
