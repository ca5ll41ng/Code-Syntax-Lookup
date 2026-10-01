---
id: "python-en-function-io-reader-t"
language: "python"
lang: "en"
category: "function"
name: "Reader[T]"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.Reader[T]"
license: "PSF"
updated: "2026-10-01"
---

# Reader[T]

Generic protocol for reading from a file or other input stream. `T` will
usually be `str` or `bytes`, but can be any type that is
read from the stream.

> *Added in 3.14*

method:: read()

For example::

  def read_it(reader: Reader[str]):
      data = reader.read(11)
      assert isinstance(data, str)
