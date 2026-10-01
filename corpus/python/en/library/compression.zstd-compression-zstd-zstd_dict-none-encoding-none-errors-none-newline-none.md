---
id: "python-en-function-compression-zstd-zstd_dict-none-encoding-none-errors-none-newline-none"
language: "python"
lang: "en"
category: "function"
name: "zstd_dict=None, encoding=None, errors=None, newline=None)"
directive: "function"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.zstd_dict=None, encoding=None, errors=None, newline=None)"
license: "PSF"
updated: "2026-10-01"
---

# zstd_dict=None, encoding=None, errors=None, newline=None)

Open a Zstandard-compressed file in binary or text mode, returning a
`file object`.

The *file* argument can be either a file name (given as a
`str`, `bytes` or `path-like`
object), in which case the named file is opened, or it can be an existing
file object to read from or write to.

The mode argument can be either `'rb'` for reading (default), `'wb'` for
overwriting, `'ab'` for appending, or `'xb'` for exclusive creation.
These can equivalently be given as `'r'`, `'w'`, `'a'`, and `'x'`
respectively. You may also open in text mode with `'rt'`, `'wt'`,
`'at'`, and `'xt'` respectively.

When reading, the *options* argument can be a dictionary providing advanced
decompression parameters; see `DecompressionParameter` for detailed
information about supported
parameters. The *zstd_dict* argument is a `ZstdDict` instance to be
used during decompression. When reading, if the *level*
argument is not None, a `TypeError` will be raised.

When writing, the *options* argument can be a dictionary
providing advanced compression parameters; see
`CompressionParameter` for detailed information about supported
parameters. The *level* argument is the compression level to use when
writing compressed data. Only one of *level* or *options* may be non-None.
The *zstd_dict* argument is a `ZstdDict` instance to be used during
compression.

In binary mode, this function is equivalent to the `ZstdFile`
constructor: `ZstdFile(file, mode, ...)`. In this case, the
*encoding*, *errors*, and *newline* parameters must not be provided.

In text mode, a `ZstdFile` object is created, and wrapped in an
`io.TextIOWrapper` instance with the specified encoding, error
handling behavior, and line endings.
