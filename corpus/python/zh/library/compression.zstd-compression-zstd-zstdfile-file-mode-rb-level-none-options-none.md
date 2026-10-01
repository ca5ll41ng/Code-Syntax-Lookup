---
id: "python-zh-function-compression-zstd-zstdfile-file-mode-rb-level-none-options-none"
language: "python"
lang: "zh"
category: "function"
name: "ZstdFile(file, /, mode='rb', *, level=None, options=None, \\"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/zh-cn/3/library/compression.zstd.html#compression.zstd.ZstdFile(file, /, mode='rb', *, level=None, options=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# ZstdFile(file, /, mode='rb', *, level=None, options=None, \

以二进制模式打开一个 Zstandard 压缩文件。

A `ZstdFile` can wrap an already-open `file object`, or operate
directly on a named file. The *file* argument specifies either the file
object to wrap, or the name of the file to open (as a `str`,
`bytes` or `path-like` object). If
wrapping an existing file object, the wrapped file will not be closed when
the `ZstdFile` is closed.

The *mode* argument can be either `'rb'` for reading (default), `'wb'`
for overwriting, `'xb'` for exclusive creation, or `'ab'` for appending.
These can equivalently be given as `'r'`, `'w'`, `'x'` and `'a'`
respectively.

If *file* is a file object (rather than an actual file name), a mode of
`'w'` does not truncate the file, and is instead equivalent to `'a'`.

When reading, the *options* argument can be a dictionary
providing advanced decompression parameters; see
`DecompressionParameter` for detailed information about supported
parameters. The *zstd_dict* argument is a `ZstdDict` instance to be
used during decompression. When reading, if the *level*
argument is not None, a `TypeError` will be raised.

When writing, the *options* argument can be a dictionary
providing advanced compression parameters; see
`CompressionParameter` for detailed information about supported
parameters. The *level* argument is the compression level to use when
writing compressed data. Only one of *level* or *options* may be passed. The
*zstd_dict* argument is a `ZstdDict` instance to be used during
compression.

`ZstdFile` supports all the members specified by
`io.BufferedIOBase`, except for `~io.BufferedIOBase.detach`
and `~io.IOBase.truncate`.
Iteration and the `with` statement are supported.

还提供了下列方法和属性：

method:: peek(size=-1)

attribute:: mode

attribute:: name
