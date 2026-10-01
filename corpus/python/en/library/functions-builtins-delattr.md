---
id: "python-en-function-builtins-delattr"
language: "python"
lang: "en"
category: "function"
name: "delattr"
signature: "delattr(object, name, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#delattr"
license: "PSF"
updated: "2026-10-01"
---

# delattr

This is a relative of `setattr`.  The arguments are an object and a
string.  The string must be the name of one of the object's attributes.  The
function deletes the named attribute, provided the object allows it.  For
example, `delattr(x, 'foobar')` is equivalent to `del x.foobar`.
*name* need not be a Python identifier (see `setattr`).
