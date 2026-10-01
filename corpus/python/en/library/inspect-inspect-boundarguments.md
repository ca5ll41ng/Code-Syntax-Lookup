---
id: "python-en-function-inspect-boundarguments"
language: "python"
lang: "en"
category: "function"
name: "BoundArguments"
directive: "class"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.BoundArguments"
license: "PSF"
updated: "2026-10-01"
---

# BoundArguments

Result of a `Signature.bind` or `Signature.bind_partial` call.
Holds the mapping of arguments to the function's parameters.

attribute:: BoundArguments.arguments

attribute:: BoundArguments.args

attribute:: BoundArguments.kwargs

attribute:: BoundArguments.signature

method:: BoundArguments.apply_defaults()

The `args` and `kwargs` properties can be used to invoke
functions:

```python

def test(a, *, b):
    ...

sig = signature(test)
ba = sig.bind(10, b=20)
test(*ba.args, **ba.kwargs)
```
