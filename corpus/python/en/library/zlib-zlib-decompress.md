---
id: "python-en-function-zlib-decompress"
language: "python"
lang: "en"
category: "function"
name: "decompress"
signature: "decompress(data, /, wbits=MAX_WBITS, bufsize=DEF_BUF_SIZE)"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

Decompresses the bytes in *data*, returning a bytes object containing the
uncompressed data.  The *wbits* parameter depends on
the format of *data*, and is discussed further below.
If *bufsize* is given, it is used as the initial size of the output
buffer.  Raises the `error` exception if any error occurs.

.. _decompress-wbits:

The *wbits* parameter controls the size of the history buffer
(or "window size"), and what header and trailer format is expected.
It is similar to the parameter for `compressobj`, but accepts
more ranges of values:

* +8 to +15: The base-two logarithm of the window size.  The input
  must include a zlib header and trailer.

* 0: Automatically determine the window size from the zlib header.
  Only supported since zlib 1.2.3.5.

* −8 to −15: Uses the absolute value of *wbits* as the window size
  logarithm.  The input must be a raw stream with no header or trailer.

* +24 to +31 = 16 + (8 to 15): Uses the low 4 bits of the value as
  the window size logarithm.  The input must include a gzip header and
  trailer.

* +40 to +47 = 32 + (8 to 15): Uses the low 4 bits of the value as
  the window size logarithm, and automatically accepts either
  the zlib or gzip format.

When decompressing a stream, the window size must not be smaller
than the size originally used to compress the stream; using a too-small
value may result in an `error` exception. The default *wbits* value
corresponds to the largest window size and requires a zlib header and
trailer to be included.

*bufsize* is the initial size of the buffer used to hold decompressed data.  If
more space is required, the buffer size will be increased as needed, so you
don't have to get this value exactly right; tuning it will only save a few calls
to :c`malloc`.

> *Changed in 3.6*: *wbits* and *bufsize* can be used as keyword arguments.
