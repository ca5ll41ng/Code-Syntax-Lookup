---
id: "python-en-function-inspect-getsourcelines"
language: "python"
lang: "en"
category: "function"
name: "getsourcelines"
signature: "getsourcelines(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getsourcelines"
license: "PSF"
updated: "2026-10-01"
---

# getsourcelines

Return a list of source lines and starting line number for an object. The
argument may be a module, class, method, function, traceback, frame, or code
object.  The source code is returned as a list of the lines corresponding to the
object and the line number indicates where in the original source file the first
line of code was found.  An `OSError` is raised if the source code cannot
be retrieved.
A `TypeError` is raised if the object is a built-in module, class, or
function.

> *Changed in 3.3*: :exc:`OSError` is raised instead of :exc:`IOError`, now an alias of the former.
