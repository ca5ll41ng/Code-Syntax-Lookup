---
id: "python-en-function-builtins-bool"
language: "python"
lang: "en"
category: "function"
name: "bool"
signature: "bool(object=False, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#bool"
license: "PSF"
updated: "2026-10-01"
---

# bool

Return a Boolean value, i.e. one of `True` or `False`.  The argument
is converted using the standard `truth testing procedure`.
If the argument is false
or omitted, this returns `False`; otherwise, it returns `True`.  The
`bool` class is a subclass of `int` (see `typesnumeric`).
It cannot be subclassed further.  Its only instances are `False` and
`True` (see `typebool`).

> *Changed in 3.7*: The parameter is now positional-only.
