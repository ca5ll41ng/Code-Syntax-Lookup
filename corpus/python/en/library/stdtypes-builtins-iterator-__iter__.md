---
id: "python-en-function-builtins-iterator-__iter__"
language: "python"
lang: "en"
category: "function"
name: "iterator.__iter__"
signature: "iterator.__iter__()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#iterator.__iter__"
license: "PSF"
updated: "2026-10-01"
---

# iterator.__iter__

Return the `iterator` object itself.  This is required to allow both
containers and iterators to be used with the `for` and
`in` statements.  This method corresponds to the
:c`~PyTypeObject.tp_iter` slot of the type structure for Python
objects in the Python/C API.
