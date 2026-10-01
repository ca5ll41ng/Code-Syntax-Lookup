---
id: "python-en-function-builtins-hasattr"
language: "python"
lang: "en"
category: "function"
name: "hasattr"
signature: "hasattr(object, name, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#hasattr"
license: "PSF"
updated: "2026-10-01"
---

# hasattr

The arguments are an object and a string.  The result is `True` if the
string is the name of one of the object's attributes, `False` if not. (This
is implemented by calling `getattr(object, name)` and seeing whether it
raises an `AttributeError` or not.)
