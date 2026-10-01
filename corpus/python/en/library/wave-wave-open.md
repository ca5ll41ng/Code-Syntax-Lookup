---
id: "python-en-function-wave-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(file, mode=None)"
directive: "function"
module: "wave"
source_url: "https://docs.python.org/3/library/wave.html#wave.open"
license: "PSF"
updated: "2026-10-01"
---

# open

If *file* is a string, a `path-like object` or a
`bytes-like object` open the file by that name, otherwise treat it as
a file-like object.  *mode* can be:

`'rb'`
   Read only mode.

`'wb'`
   Write only mode.

Note that it does not allow read/write WAV files.

A *mode* of `'rb'` returns a `Wave_read` object, while a *mode* of
`'wb'` returns a `Wave_write` object.  If *mode* is omitted and a
file-like object is passed as *file*, `file.mode` is used as the default
value for *mode*.

If you pass in a file-like object, the wave object will not close it when its
`close()` method is called; it is the caller's responsibility to close
the file object.

The `.open` function may be used in a `with` statement.  When
the `with` block completes, the `Wave_read.close` or
`Wave_write.close` method is called.

> *Changed in 3.4*: Added support for unseekable files.

> *Changed in 3.15*: Added support for :term:`path-like objects <path-like object>` and :term:`bytes-like objects <bytes-like object>`.
