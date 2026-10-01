---
id: "python-en-function-builtins-setattr"
language: "python"
lang: "en"
category: "function"
name: "setattr"
signature: "setattr(object, name, value, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#setattr"
license: "PSF"
updated: "2026-10-01"
---

# setattr

This is the counterpart of `getattr`.  The arguments are an object, a
string, and an arbitrary value.  The string may name an existing attribute or a
new attribute.  The function assigns the value to the attribute, provided the
object allows it.  For example, `setattr(x, 'foobar', 123)` is equivalent to
`x.foobar = 123`.

*name* need not be a Python identifier as defined in `identifiers`
unless the object chooses to enforce that, for example in a custom
`~object.__getattribute__` or via `~object.__slots__`.
An attribute whose name is not an identifier will not be accessible using
the dot notation, but is accessible through `getattr` etc..

> **Note**
>
> Since `private name mangling` happens at
> compilation time, one must manually mangle a private attribute's
> (attributes with two leading underscores) name in order to set it with
> `setattr`.
>
