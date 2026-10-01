---
id: "python-en-function-io-textiowrapper-buffer-encoding-none-errors-none-newline-none"
language: "python"
lang: "en"
category: "function"
name: "TextIOWrapper(buffer, encoding=None, errors=None, newline=None, \\"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.TextIOWrapper(buffer, encoding=None, errors=None, newline=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# TextIOWrapper(buffer, encoding=None, errors=None, newline=None, \

A buffered text stream providing higher-level access to a
`BufferedIOBase` buffered binary stream.  It inherits from
`TextIOBase`.

*encoding* gives the name of the encoding that the stream will be decoded or
encoded with.  This defaults to UTF-8; if `UTF-8 Mode` is
disabled, it defaults to `locale.getencoding`.
`encoding="locale"` can be used to specify the current locale's encoding
explicitly. See `io-text-encoding` for more information.

*errors* is an optional string that specifies how encoding and decoding
errors are to be handled.  Pass `'strict'` to raise a `ValueError`
exception if there is an encoding error (the default of `None` has the same
effect), or pass `'ignore'` to ignore errors.  (Note that ignoring encoding
errors can lead to data loss.)  `'replace'` causes a replacement marker
(such as `'?'`) to be inserted where there is malformed data.
`'backslashreplace'` causes malformed data to be replaced by a
backslashed escape sequence.  When writing, `'xmlcharrefreplace'`
(replace with the appropriate XML character reference)  or `'namereplace'`
(replace with `\N{...}` escape sequences) can be used.  Any other error
handling name that has been registered with
`codecs.register_error` is also valid.

*newline* controls how line endings are handled.  It can be `None`,
`''`, `'\n'`, `'\r'`, and `'\r\n'`.  It works as follows:

* When reading input from the stream, if *newline* is `None`,
  `universal newlines` mode is enabled.  Lines in the input can end in
  `'\n'`, `'\r'`, or `'\r\n'`, and these are translated into `'\n'`
  before being returned to the caller.  If *newline* is `''`, universal
  newlines mode is enabled, but line endings are returned to the caller
  untranslated.  If *newline* has any of the other legal values, input lines
  are only terminated by the given string, and the line ending is returned to
  the caller untranslated.

* When writing output to the stream, if *newline* is `None`, any `'\n'`
  characters written are translated to the system default line separator,
  `os.linesep`.  If *newline* is `''` or `'\n'`, no translation
  takes place.  If *newline* is any of the other legal values, any `'\n'`
  characters written are translated to the given string.

If *line_buffering* is `True`, `~IOBase.flush` is implied when a call to
write contains a newline character or a carriage return.

If *write_through* is `True`, calls to `~BufferedIOBase.write` are guaranteed
not to be buffered: any data written on the `TextIOWrapper`
object is immediately handled to its underlying binary *buffer*.

> *Changed in 3.3*: The *write_through* argument has been added.

> *Changed in 3.3*: The default *encoding* is now ``locale.getpreferredencoding(False)`` instead of ``locale.getpreferredencoding()``. Don't change temporary the locale encoding using :func:`locale.setlocale`, use the current locale encoding instead of the user preferred encoding.

> *Changed in 3.10*: The *encoding* argument now supports the ``"locale"`` dummy encoding name.

> **Note**
>
> When the underlying raw stream is non-blocking, a `BlockingIOError`
> may be raised if a read operation cannot be completed immediately.
>

`TextIOWrapper` provides these data attributes and methods in
addition to those from `TextIOBase` and `IOBase`:

attribute:: line_buffering

attribute:: write_through

method:: reconfigure(*, encoding=None, errors=None, newline=None, \

method:: seek(cookie, whence=os.SEEK_SET, /)

method:: tell()
