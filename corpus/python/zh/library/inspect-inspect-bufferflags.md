---
id: "python-zh-function-inspect-bufferflags"
language: "python"
lang: "zh"
category: "function"
name: "BufferFlags"
directive: "class"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.BufferFlags"
license: "PSF"
updated: "2026-10-01"
---

# BufferFlags

This is an `enum.IntFlag` that represents the flags that
can be passed to the `~object.__buffer__` method of objects
implementing the `buffer protocol`.

这些旗标的含义的说明见 :ref:`buffer-request-types`。

attribute:: BufferFlags.SIMPLE

attribute:: BufferFlags.WRITABLE

attribute:: BufferFlags.FORMAT

attribute:: BufferFlags.ND

attribute:: BufferFlags.STRIDES

attribute:: BufferFlags.C_CONTIGUOUS

attribute:: BufferFlags.F_CONTIGUOUS

attribute:: BufferFlags.ANY_CONTIGUOUS

attribute:: BufferFlags.INDIRECT

attribute:: BufferFlags.CONTIG

attribute:: BufferFlags.CONTIG_RO

attribute:: BufferFlags.STRIDED

attribute:: BufferFlags.STRIDED_RO

attribute:: BufferFlags.RECORDS

attribute:: BufferFlags.RECORDS_RO

attribute:: BufferFlags.FULL

attribute:: BufferFlags.FULL_RO

attribute:: BufferFlags.READ

attribute:: BufferFlags.WRITE

> *Added in 3.12*
