---
id: "python-en-function-typing-get_args"
language: "python"
lang: "en"
category: "function"
name: "get_args"
signature: "get_args(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.get_args"
license: "PSF"
updated: "2026-10-01"
---

# get_args

Get type arguments with all substitutions performed: for a typing object
of the form `X[Y, Z, ...]` return `(Y, Z, ...)`.

If `X` is a union or `Literal` contained in another
generic type, the order of `(Y, Z, ...)` may be different from the order
of the original arguments `[Y, Z, ...]` due to type caching.
Return `()` for unsupported objects.

Examples:

```python

assert get_args(int) == ()
assert get_args(Dict[int, str]) == (int, str)
assert get_args(Union[int, str]) == (int, str)
```

> *Added in 3.8*
