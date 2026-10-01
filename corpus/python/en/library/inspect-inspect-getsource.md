---
id: "python-en-function-inspect-getsource"
language: "python"
lang: "en"
category: "function"
name: "getsource"
signature: "getsource(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getsource"
license: "PSF"
updated: "2026-10-01"
---

# getsource

Return the text of the source code for an object. The argument may be a module,
class, method, function, traceback, frame, or code object.  The source code is
returned as a single string.  An `OSError` is raised if the source code
cannot be retrieved.
A `TypeError` is raised if the object is a built-in module, class, or
function.

> *Changed in 3.3*: :exc:`OSError` is raised instead of :exc:`IOError`, now an alias of the former.
