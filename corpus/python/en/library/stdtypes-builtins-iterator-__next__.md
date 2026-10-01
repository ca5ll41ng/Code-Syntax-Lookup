---
id: "python-en-function-builtins-iterator-__next__"
language: "python"
lang: "en"
category: "function"
name: "iterator.__next__"
signature: "iterator.__next__()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#iterator.__next__"
license: "PSF"
updated: "2026-10-01"
---

# iterator.__next__

Return the next item from the `iterator`.  If there are no further
items, raise the `StopIteration` exception.  This method corresponds to
the :c`~PyTypeObject.tp_iternext` slot of the type structure for
Python objects in the Python/C API.
