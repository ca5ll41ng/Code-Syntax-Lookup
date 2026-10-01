---
id: "python-en-function-io-bufferedwriter"
language: "python"
lang: "en"
category: "function"
name: "BufferedWriter"
signature: "BufferedWriter(raw, buffer_size=DEFAULT_BUFFER_SIZE)"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BufferedWriter"
license: "PSF"
updated: "2026-10-01"
---

# BufferedWriter

A buffered binary stream providing higher-level access to a writeable, non
seekable `RawIOBase` raw binary stream.  It inherits from
`BufferedIOBase`.

When writing to this object, data is normally placed into an internal
buffer.  The buffer will be written out to the underlying `RawIOBase`
object under various conditions, including:

* when the buffer gets too small for all pending data;
* when `flush` is called;
* when a `~IOBase.seek` is requested (for `BufferedRandom` objects);
* when the `BufferedWriter` object is closed or destroyed.

The constructor creates a `BufferedWriter` for the given writeable
*raw* stream.  If the *buffer_size* is not given, it defaults to
`DEFAULT_BUFFER_SIZE`.

`BufferedWriter` provides or overrides these methods in addition to
those from `BufferedIOBase` and `IOBase`:

method:: flush()

method:: write(b, /)
