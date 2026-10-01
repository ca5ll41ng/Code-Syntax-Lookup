---
id: "python-en-function-io-bufferedreader"
language: "python"
lang: "en"
category: "function"
name: "BufferedReader"
signature: "BufferedReader(raw, buffer_size=DEFAULT_BUFFER_SIZE)"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BufferedReader"
license: "PSF"
updated: "2026-10-01"
---

# BufferedReader

A buffered binary stream providing higher-level access to a readable, non
seekable `RawIOBase` raw binary stream.  It inherits from
`BufferedIOBase`.

When reading data from this object, a larger amount of data may be
requested from the underlying raw stream, and kept in an internal buffer.
The buffered data can then be returned directly on subsequent reads.

The constructor creates a `BufferedReader` for the given readable
*raw* stream and *buffer_size*.  If *buffer_size* is omitted,
`DEFAULT_BUFFER_SIZE` is used.

`BufferedReader` provides or overrides these methods in addition to
those from `BufferedIOBase` and `IOBase`:

method:: peek(size=0, /)

method:: read(size=-1, /)

method:: read1(size=-1, /)
