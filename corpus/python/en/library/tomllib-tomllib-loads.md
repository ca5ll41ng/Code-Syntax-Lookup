---
id: "python-en-function-tomllib-loads"
language: "python"
lang: "en"
category: "function"
name: "loads"
signature: "loads(s, /, *, parse_float=float)"
directive: "function"
module: "tomllib"
source_url: "https://docs.python.org/3/library/tomllib.html#tomllib.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Load TOML from a `str` object. Return a `dict`. Convert TOML
types to Python using this `conversion table`. The
*parse_float* argument has the same meaning as in `load`.

A `TOMLDecodeError` will be raised on an invalid TOML document.
