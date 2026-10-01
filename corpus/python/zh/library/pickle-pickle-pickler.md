---
id: "python-zh-function-pickle-pickler"
language: "python"
lang: "zh"
category: "function"
name: "Pickler"
signature: "Pickler(file, protocol=None, *, fix_imports=True, buffer_callback=None)"
directive: "class"
module: "pickle"
source_url: "https://docs.python.org/zh-cn/3/library/pickle.html#pickle.Pickler"
license: "PSF"
updated: "2026-10-01"
---

# Pickler

它接受一个二进制文件用于写入 pickle 数据流。

The optional *protocol* argument, an integer, tells the pickler to use
the given protocol; supported protocols are 0 to `HIGHEST_PROTOCOL`.
If not specified, the default is `DEFAULT_PROTOCOL`.  If a negative
number is specified, `HIGHEST_PROTOCOL` is selected.

The *file* argument must have a write() method that accepts a single bytes
argument.  It can thus be an on-disk file opened for binary writing, an
`io.BytesIO` instance, or any other custom object that meets this
interface.

If *fix_imports* is true and *protocol* is less than 3, pickle will try to
map the new Python 3 names to the old module names used in Python 2, so
that the pickle data stream is readable with Python 2.

If *buffer_callback* is `None` (the default), buffer views are
serialized into *file* as part of the pickle stream.

If *buffer_callback* is not `None`, then it can be called any number
of times with a buffer view.  If the callback returns a false value
(such as `None`), the given buffer is `out-of-band`;
otherwise the buffer is serialized in-band, i.e. inside the pickle stream.

It is an error if *buffer_callback* is not `None` and *protocol* is
`None` or smaller than 5.

> *Changed in 3.8*: The *buffer_callback* argument was added.

method:: dump(obj)

method:: persistent_id(obj)

attribute:: dispatch_table

method:: reducer_override(obj)

attribute:: fast

method:: clear_memo()
