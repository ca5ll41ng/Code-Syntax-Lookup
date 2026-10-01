---
id: "python-en-function-builtins-callable"
language: "python"
lang: "en"
category: "function"
name: "callable"
signature: "callable(object, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#callable"
license: "PSF"
updated: "2026-10-01"
---

# callable

Return `True` if the *object* argument appears callable,
`False` if not.  If this returns `True`, it is still possible that a
call fails, but if it is `False`, calling *object* will never succeed.
Note that classes are callable (calling a class returns a new instance);
instances are callable if their class has a `~object.__call__` method.

> *Added in 3.2*: This function was first removed in Python 3.0 and then brought back in Python 3.2.
