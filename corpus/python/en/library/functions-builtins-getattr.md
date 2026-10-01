---
id: "python-en-function-builtins-getattr"
language: "python"
lang: "en"
category: "function"
name: "getattr"
signature: "getattr(object, name, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#getattr"
license: "PSF"
updated: "2026-10-01"
---

# getattr

Return the value of the named attribute of *object*.  *name* must be a string.
If the string is the name of one of the object's attributes, the result is the
value of that attribute.  For example, `getattr(x, 'foobar')` is equivalent to
`x.foobar`.  If the named attribute does not exist, *default* is returned if
provided, otherwise `AttributeError` is raised.
*name* need not be a Python identifier (see `setattr`).

> **Note**
>
> Since `private name mangling` happens at
> compilation time, one must manually mangle a private attribute's
> (attributes with two leading underscores) name in order to retrieve it with
> `getattr`.
>
