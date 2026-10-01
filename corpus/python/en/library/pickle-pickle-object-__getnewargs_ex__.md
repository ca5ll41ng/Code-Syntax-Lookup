---
id: "python-en-function-pickle-object-__getnewargs_ex__"
language: "python"
lang: "en"
category: "function"
name: "object.__getnewargs_ex__"
signature: "object.__getnewargs_ex__()"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__getnewargs_ex__"
license: "PSF"
updated: "2026-10-01"
---

# object.__getnewargs_ex__

In protocols 2 and newer, classes that implement the
`__getnewargs_ex__` method can dictate the values passed to the
`__new__` method upon unpickling.  The method must return a pair
`(args, kwargs)` where *args* is a tuple of positional arguments
and *kwargs* a dictionary of named arguments for constructing the
object.  Those will be passed to the `__new__` method upon
unpickling.

You should implement this method if the `__new__` method of your
class requires keyword-only arguments.  Otherwise, it is recommended for
compatibility to implement `__getnewargs__`.

> *Changed in 3.6*: :meth:`__getnewargs_ex__` is now used in protocols 2 and 3.
