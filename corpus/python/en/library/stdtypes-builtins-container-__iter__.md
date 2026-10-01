---
id: "python-en-function-builtins-container-__iter__"
language: "python"
lang: "en"
category: "function"
name: "container.__iter__"
signature: "container.__iter__()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#container.__iter__"
license: "PSF"
updated: "2026-10-01"
---

# container.__iter__

Return an `iterator` object.  The object is required to support the
iterator protocol described below.  If a container supports different types
of iteration, additional methods can be provided to specifically request
iterators for those iteration types.  (An example of an object supporting
multiple forms of iteration would be a tree structure which supports both
breadth-first and depth-first traversal.)  This method corresponds to the
:c`~PyTypeObject.tp_iter` slot of the type structure for Python
objects in the Python/C API.
