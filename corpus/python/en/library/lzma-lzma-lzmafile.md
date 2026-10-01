---
id: "python-en-function-lzma-lzmafile"
language: "python"
lang: "en"
category: "function"
name: "LZMAFile"
signature: "LZMAFile(filename=None, mode=\"r\", *, format=None, check=-1, preset=None, filters=None)"
directive: "class"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.LZMAFile"
license: "PSF"
updated: "2026-10-01"
---

# LZMAFile

Open an LZMA-compressed file in binary mode.

An `LZMAFile` can wrap an already-open `file object`, or operate
directly on a named file. The *filename* argument specifies either the file
object to wrap, or the name of the file to open (as a `str`,
`bytes` or `path-like` object). When wrapping an
existing file object, the wrapped file will not be closed when the
`LZMAFile` is closed.

The *mode* argument can be either `"r"` for reading (default), `"w"` for
overwriting, `"x"` for exclusive creation, or `"a"` for appending. These
can equivalently be given as `"rb"`, `"wb"`, `"xb"` and `"ab"`
respectively.

If *filename* is a file object (rather than an actual file name), a mode of
`"w"` does not truncate the file, and is instead equivalent to `"a"`.

When opening a file for reading, the input file may be the concatenation of
multiple separate compressed streams. These are transparently decoded as a
single logical stream.

When opening a file for reading, the *format* and *filters* arguments have
the same meanings as for `LZMADecompressor`. In this case, the *check*
and *preset* arguments should not be used.

When opening a file for writing, the *format*, *check*, *preset* and
*filters* arguments have the same meanings as for `LZMACompressor`.

`LZMAFile` supports all the members specified by
`io.BufferedIOBase`, except for `~io.BufferedIOBase.detach`
and `~io.IOBase.truncate`.
Iteration and the `with` statement are supported.

The following method and attributes are also provided:

method:: peek(size=-1)

attribute:: mode

attribute:: name

> *Changed in 3.4*: Added support for the ``"x"`` and ``"xb"`` modes.

> *Changed in 3.5*: The :meth:`~io.BufferedIOBase.read` method now accepts an argument of ``None``.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
