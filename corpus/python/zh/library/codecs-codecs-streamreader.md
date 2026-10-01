---
id: "python-zh-function-codecs-streamreader"
language: "python"
lang: "zh"
category: "function"
name: "StreamReader"
signature: "StreamReader(stream, errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.StreamReader"
license: "PSF"
updated: "2026-10-01"
---

# StreamReader

:class:`StreamReader` 实例的构造器。

All stream readers must provide this constructor interface. They are free to add
additional keyword arguments, but only the ones defined here are used by the
Python codec registry.

The *stream* argument must be a file-like object open for reading
text or binary data, as appropriate for the specific codec.

The `StreamReader` may implement different error handling schemes by
providing the *errors* keyword argument. See `error-handlers` for
the standard error handlers the underlying stream codec may support.

The *errors* argument will be assigned to an attribute of the same name.
Assigning to this attribute makes it possible to switch between different error
handling strategies during the lifetime of the `StreamReader` object.

The set of allowed values for the *errors* argument can be extended with
`register_error`.

method:: read(size=-1, chars=-1, firstline=False)

method:: readline(size=None, keepends=True)

method:: readlines(sizehint=None, keepends=True)

method:: reset()
