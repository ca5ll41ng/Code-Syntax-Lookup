---
id: "python-en-function-io-rawiobase"
language: "python"
lang: "en"
category: "function"
name: "RawIOBase"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.RawIOBase"
license: "PSF"
updated: "2026-10-01"
---

# RawIOBase

Base class for raw binary streams.  It inherits from `IOBase`.

Raw binary streams typically provide low-level access to an underlying OS
device or API, and do not try to encapsulate it in high-level primitives
(this functionality is done at a higher-level in buffered binary streams and text streams, described later
in this page).

`RawIOBase` provides these methods in addition to those from
`IOBase`:

method:: read(size=-1, /)

method:: readall()

method:: readinto(b, /)

method:: write(b, /)
