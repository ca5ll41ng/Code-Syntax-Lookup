---
id: "python-en-function-io-bufferediobase"
language: "python"
lang: "en"
category: "function"
name: "BufferedIOBase"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BufferedIOBase"
license: "PSF"
updated: "2026-10-01"
---

# BufferedIOBase

Base class for binary streams that support some kind of buffering.
It inherits from `IOBase`.

The main difference with `RawIOBase` is that methods `read`,
`readinto` and `write` will try (respectively) to read
as much input as requested or to emit all provided data.

In addition, if the underlying raw stream is in non-blocking mode, when the
system returns would block `write` will raise `BlockingIOError`
with `BlockingIOError.characters_written` and `read` will return
data read so far or `None` if no data is available.

Besides, the `read` method does not have a default
implementation that defers to `readinto`.

A typical `BufferedIOBase` implementation should not inherit from a
`RawIOBase` implementation, but wrap one, like
`BufferedWriter` and `BufferedReader` do.

`BufferedIOBase` provides or overrides these data attributes and
methods in addition to those from `IOBase`:

attribute:: raw

method:: detach()

method:: read(size=-1, /)

method:: read1(size=-1, /)

method:: readinto(b, /)

method:: readinto1(b, /)

method:: write(b, /)
