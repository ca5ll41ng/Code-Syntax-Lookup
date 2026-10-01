---
id: "python-en-function-builtins-format"
language: "python"
lang: "en"
category: "function"
name: "format"
signature: "format(value, format_spec=\"\", /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#format"
license: "PSF"
updated: "2026-10-01"
---

# format

Convert a *value* to a "formatted" representation, as controlled by
*format_spec*.  The interpretation of *format_spec* will depend on the type
of the *value* argument; however, there is a standard formatting syntax that
is used by most built-in types: `formatspec`.

The default *format_spec* is an empty string which usually gives the same
effect as calling `str(value)`.

A call to `format(value, format_spec)` is translated to
`type(value).__format__(value, format_spec)` which bypasses the instance
dictionary when searching for the value's `~object.__format__` method.
A `TypeError` exception is raised if the method search reaches
`object` and the *format_spec* is non-empty, or if either the
*format_spec* or the return value are not strings.

> *Changed in 3.4*: ``object().__format__(format_spec)`` raises :exc:`TypeError` if *format_spec* is not an empty string.
