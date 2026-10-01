---
id: "python-en-function-importlib-all_suffixes"
language: "python"
lang: "en"
category: "function"
name: "all_suffixes"
signature: "all_suffixes()"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.all_suffixes"
license: "PSF"
updated: "2026-10-01"
---

# all_suffixes

Returns a combined list of strings representing all file suffixes for
modules recognized by the standard import machinery. This is a
helper for code which simply needs to know if a filesystem path
potentially refers to a module without needing any details on the kind
of module (for example, `inspect.getmodulename`).

> *Added in 3.3*
