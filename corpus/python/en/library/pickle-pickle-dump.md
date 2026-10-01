---
id: "python-en-function-pickle-dump"
language: "python"
lang: "en"
category: "function"
name: "dump"
signature: "dump(obj, file, protocol=None, *, fix_imports=True, buffer_callback=None)"
directive: "function"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.dump"
license: "PSF"
updated: "2026-10-01"
---

# dump

Write the pickled representation of the object *obj* to the open
`file object` *file*.  This is equivalent to
`Pickler(file, protocol).dump(obj)`.

Arguments *file*, *protocol*, *fix_imports* and *buffer_callback* have
the same meaning as in the `Pickler` constructor.

> *Changed in 3.8*: The *buffer_callback* argument was added.
