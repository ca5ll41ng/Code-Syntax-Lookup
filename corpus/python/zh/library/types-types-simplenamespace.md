---
id: "python-zh-function-types-simplenamespace"
language: "python"
lang: "zh"
category: "function"
name: "SimpleNamespace"
directive: "class"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.SimpleNamespace"
license: "PSF"
updated: "2026-10-01"
---

# SimpleNamespace

A simple `object` subclass that provides attribute access to its
namespace, as well as a meaningful repr.

Unlike `object`, with `SimpleNamespace` you can add and remove
attributes.

:py`SimpleNamespace` objects may be initialized
in the same way as `dict`: either with keyword arguments,
with a single positional argument, or with both.
When initialized with keyword arguments,
those are directly added to the underlying namespace.
Alternatively, when initialized with a positional argument,
the underlying namespace will be updated with key-value pairs
from that argument (either a mapping object or
an `iterable` object producing key-value pairs).
All such keys must be strings.

此类型大致等价于以下代码::

    class SimpleNamespace:
        def __init__(self, mapping_or_iterable=(), /, **kwargs):
            self.__dict__.update(mapping_or_iterable)
            self.__dict__.update(kwargs)

        def __repr__(self):
            items = (f"{k}={v!r}" for k, v in self.__dict__.items())
            return "{}({})".format(type(self).__name__, ", ".join(items))

        def __eq__(self, other):
            if isinstance(self, SimpleNamespace) and isinstance(other, SimpleNamespace):
               return self.__dict__ == other.__dict__
            return NotImplemented

`SimpleNamespace` may be useful as a replacement for `class NS: pass`.
However, for a structured record type use `~collections.namedtuple`
instead.

:class:`!SimpleNamespace` 对象受到 :func:`copy.replace` 的支持。

> *Added in 3.3*

> *Changed in 3.9*: Attribute order in the repr changed from alphabetical to insertion (like ``dict``).

> *Changed in 3.13*: Added support for an optional positional argument.
