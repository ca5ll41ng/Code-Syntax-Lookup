---
id: "python-en-function-pickle-object-__getnewargs__"
language: "python"
lang: "en"
category: "function"
name: "object.__getnewargs__"
signature: "object.__getnewargs__()"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__getnewargs__"
license: "PSF"
updated: "2026-10-01"
---

# object.__getnewargs__

This method serves a similar purpose as `__getnewargs_ex__`, but
supports only positional arguments.  It must return a tuple of arguments
`args` which will be passed to the `__new__` method upon unpickling.

`__getnewargs__` will not be called if `__getnewargs_ex__` is
defined.

> *Changed in 3.6*: Before Python 3.6, :meth:`__getnewargs__` was called instead of :meth:`__getnewargs_ex__` in protocols 2 and 3.
