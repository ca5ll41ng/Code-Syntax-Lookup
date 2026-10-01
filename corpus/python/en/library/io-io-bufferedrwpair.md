---
id: "python-en-function-io-bufferedrwpair"
language: "python"
lang: "en"
category: "function"
name: "BufferedRWPair"
signature: "BufferedRWPair(reader, writer, buffer_size=DEFAULT_BUFFER_SIZE, /)"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BufferedRWPair"
license: "PSF"
updated: "2026-10-01"
---

# BufferedRWPair

A buffered binary stream providing higher-level access to two non seekable
`RawIOBase` raw binary streams---one readable, the other writeable.
It inherits from `BufferedIOBase`.

*reader* and *writer* are `RawIOBase` objects that are readable and
writeable respectively.  If the *buffer_size* is omitted it defaults to
`DEFAULT_BUFFER_SIZE`.

`BufferedRWPair` implements all of `BufferedIOBase`\'s methods
except for `~BufferedIOBase.detach`, which raises
`UnsupportedOperation`.

> **Warning**
>
> `BufferedRWPair` does not attempt to synchronize accesses to
> its underlying raw streams.  You should not pass it the same object
> as reader and writer; use `BufferedRandom` instead.
>
