---
id: "python-en-function-builtins-notimplemented"
language: "python"
lang: "en"
category: "function"
name: "NotImplemented"
directive: "data"
module: "builtins"
source_url: "https://docs.python.org/3/library/constants.html#NotImplemented"
license: "PSF"
updated: "2026-10-01"
---

# NotImplemented

A special value which should be returned by the binary special methods
(e.g. `~object.__eq__`, `~object.__lt__`, `~object.__add__`, `~object.__rsub__`,
etc.) to indicate that the operation is not implemented with respect to
the other type; may be returned by the in-place binary special methods
(e.g. `~object.__imul__`, `~object.__iand__`, etc.) for the same purpose.
It should not be evaluated in a boolean context.
`NotImplemented` is the sole instance of the `types.NotImplementedType` type.

> **Note**
>
> When a binary (or in-place) method returns `NotImplemented` the
> interpreter will try the reflected operation on the other type (or some
> other fallback, depending on the operator).  If all attempts return
> `NotImplemented`, the interpreter will raise an appropriate exception.
> Incorrectly returning `NotImplemented` will result in a misleading
> error message or the `NotImplemented` value being returned to Python code.
>
> See `implementing-the-arithmetic-operations` for examples.
>

> **Caution**
>
> `NotImplemented` and `NotImplementedError` are not
> interchangeable. This constant should only be used as described
> above; see `NotImplementedError` for details on correct usage
> of the exception.
>

> *Changed in 3.9*: Evaluating :data:`!NotImplemented` in a boolean context was deprecated.

> *Changed in 3.14*: Evaluating :data:`!NotImplemented` in a boolean context now raises a :exc:`TypeError`. It previously evaluated to :const:`True` and emitted a :exc:`DeprecationWarning` since Python 3.9.
