---
id: "python-en-function-io-bytesio"
language: "python"
lang: "en"
category: "function"
name: "BytesIO"
signature: "BytesIO(initial_bytes=b'')"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.BytesIO"
license: "PSF"
updated: "2026-10-01"
---

# BytesIO

A binary stream using an in-memory bytes buffer.  It inherits from
`BufferedIOBase`.  The buffer is discarded when the
`~IOBase.close` method is called.

The optional argument *initial_bytes* is a `bytes-like object` that
contains initial data.

Methods may be used from multiple threads without external locking in
`free-threaded builds`.

`BytesIO` provides or overrides these methods in addition to those
from `BufferedIOBase` and `IOBase`:

method:: getbuffer()

method:: getvalue()

method:: peek(size=0, /)

method:: read1(size=-1, /)

method:: readinto1(b, /)
