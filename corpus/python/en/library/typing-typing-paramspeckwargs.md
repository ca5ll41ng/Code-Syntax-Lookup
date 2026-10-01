---
id: "python-en-function-typing-paramspeckwargs"
language: "python"
lang: "en"
category: "function"
name: "ParamSpecKwargs"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.ParamSpecKwargs"
license: "PSF"
updated: "2026-10-01"
---

# ParamSpecKwargs

Arguments and keyword arguments attributes of a `ParamSpec`. The
`P.args` attribute of a `ParamSpec` is an instance of `ParamSpecArgs`,
and `P.kwargs` is an instance of `ParamSpecKwargs`. They are intended
for runtime introspection and have no special meaning to static type checkers.

Calling `get_origin` on either of these objects will return the
original `ParamSpec`:

```python

>>> from typing import ParamSpec, get_origin
>>> P = ParamSpec("P")
>>> get_origin(P.args) is P
True
>>> get_origin(P.kwargs) is P
True
```

> *Added in 3.10*
