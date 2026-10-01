---
id: "python-zh-function-codecs-streamwriter"
language: "python"
lang: "zh"
category: "function"
name: "StreamWriter"
signature: "StreamWriter(stream, errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.StreamWriter"
license: "PSF"
updated: "2026-10-01"
---

# StreamWriter

:class:`StreamWriter` 实例的构造器。

All stream writers must provide this constructor interface. They are free to add
additional keyword arguments, but only the ones defined here are used by the
Python codec registry.

The *stream* argument must be a file-like object open for writing
text or binary data, as appropriate for the specific codec.

The `StreamWriter` may implement different error handling schemes by
providing the *errors* keyword argument. See `error-handlers` for
the standard error handlers the underlying stream codec may support.

The *errors* argument will be assigned to an attribute of the same name.
Assigning to this attribute makes it possible to switch between different error
handling strategies during the lifetime of the `StreamWriter` object.

method:: write(object)

method:: writelines(list)

method:: reset()
