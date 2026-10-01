---
id: "python-en-function-inspect-getargvalues"
language: "python"
lang: "en"
category: "function"
name: "getargvalues"
signature: "getargvalues(frame)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getargvalues"
license: "PSF"
updated: "2026-10-01"
---

# getargvalues

Get information about arguments passed into a particular frame.  A
`named tuple` `ArgInfo(args, varargs, keywords, locals)` is
returned. *args* is a list of the argument names.  *varargs* and *keywords*
are the names of the `*` and `**` arguments or `None`.  *locals* is the
locals dictionary of the given frame.

> **Note**
>
> This function was inadvertently marked as deprecated in Python 3.5.
>
