---
id: "python-en-function-io-text_encoding"
language: "python"
lang: "en"
category: "function"
name: "text_encoding"
signature: "text_encoding(encoding, stacklevel=2, /)"
directive: "function"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.text_encoding"
license: "PSF"
updated: "2026-10-01"
---

# text_encoding

This is a helper function for callables that use `open` or
`TextIOWrapper` and have an `encoding=None` parameter.

This function returns *encoding* if it is not `None`.
Otherwise, it returns `"locale"` or `"utf-8"` depending on
`UTF-8 Mode`.

This function emits an `EncodingWarning` if
`sys.flags.warn_default_encoding` is true and *encoding*
is `None`. *stacklevel* specifies where the warning is emitted.
For example::

   def read_text(path, encoding=None):
       encoding = io.text_encoding(encoding)  # stacklevel=2
       with open(path, encoding) as f:
           return f.read()

In this example, an `EncodingWarning` is emitted for the caller of
`read_text()`.

See `io-text-encoding` for more information.

> *Added in 3.10*

> *Changed in 3.11*: :func:`text_encoding` returns "utf-8" when UTF-8 mode is enabled and *encoding* is ``None``.
