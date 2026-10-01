---
id: "python-zh-function-io-writer-t"
language: "python"
lang: "zh"
category: "function"
name: "Writer[T]"
directive: "class"
module: "io"
source_url: "https://docs.python.org/zh-cn/3/library/io.html#io.Writer[T]"
license: "PSF"
updated: "2026-10-01"
---

# Writer[T]

Generic protocol for writing to a file or other output stream. `T` will
usually be `str` or `bytes`, but can be any type that can be
written to the stream.

> *Added in 3.14*

method:: write(data, /)

例如::

  def write_binary(writer: Writer[bytes]):
      writer.write(b"Hello world!\n")
