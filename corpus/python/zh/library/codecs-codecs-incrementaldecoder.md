---
id: "python-zh-function-codecs-incrementaldecoder"
language: "python"
lang: "zh"
category: "function"
name: "IncrementalDecoder"
signature: "IncrementalDecoder(errors='strict')"
directive: "class"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.IncrementalDecoder"
license: "PSF"
updated: "2026-10-01"
---

# IncrementalDecoder

:class:`IncrementalDecoder` 实例的构造器。

All incremental decoders must provide this constructor interface. They are free
to add additional keyword arguments, but only the ones defined here are used by
the Python codec registry.

The `IncrementalDecoder` may implement different error handling schemes
by providing the *errors* keyword argument. See `error-handlers` for
possible values.

The *errors* argument will be assigned to an attribute of the same name.
Assigning to this attribute makes it possible to switch between different error
handling strategies during the lifetime of the `IncrementalDecoder`
object.

method:: decode(object, final=False)

method:: reset()

method:: getstate()

method:: setstate(state)
