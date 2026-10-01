---
id: "python-en-function-pickle-dumps"
language: "python"
lang: "en"
category: "function"
name: "dumps"
signature: "dumps(obj, protocol=None, *, fix_imports=True, buffer_callback=None)"
directive: "function"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.dumps"
license: "PSF"
updated: "2026-10-01"
---

# dumps

Return the pickled representation of the object *obj* as a `bytes` object,
instead of writing it to a file.

Arguments *protocol*, *fix_imports* and *buffer_callback* have the same
meaning as in the `Pickler` constructor.

> *Changed in 3.8*: The *buffer_callback* argument was added.
