---
id: "python-en-function-gzip-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(filename, mode='rb', compresslevel=6, encoding=None, errors=None, newline=None, *, mtime=None)"
directive: "function"
module: "gzip"
source_url: "https://docs.python.org/3/library/gzip.html#gzip.open"
license: "PSF"
updated: "2026-10-01"
---

# open

Open a gzip-compressed file in binary or text mode, returning a `file
object`.

The *filename* argument can be an actual filename (a `str` or
`bytes` object), or an existing file object to read from or write to.

The *mode* argument can be any of `'r'`, `'rb'`, `'a'`, `'ab'`,
`'w'`, `'wb'`, `'x'` or `'xb'` for binary mode, or `'rt'`,
`'at'`, `'wt'`, or `'xt'` for text mode. The default is `'rb'`.

The *compresslevel* argument is an integer from 0 to 9, as for the
`GzipFile` constructor.

The keyword-only argument *mtime* represents a Unix timestamp.

For binary mode, this function is equivalent to the `GzipFile`
constructor: `GzipFile(filename, mode, compresslevel, mtime=mtime)`.
In this case, the *encoding*, *errors* and *newline* arguments must not
be provided.

For text mode, a `GzipFile` object is created, and wrapped in an
`io.TextIOWrapper` instance with the specified encoding, error
handling behavior, and line ending(s).

> *Changed in 3.3*: Added support for *filename* being a file object, support for text mode, and the *encoding*, *errors* and *newline* arguments.

> *Changed in 3.4*: Added support for the ``'x'``, ``'xb'`` and ``'xt'`` modes.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.15*: The default compression level was reduced to 6 (down from 9). It is the default level used by most compression tools and a better tradeoff between speed and performance.

> *Changed in next*: Added keyword-only argument *mtime* which is passed to the class constructor of :class:`~gzip.GzipFile`.
