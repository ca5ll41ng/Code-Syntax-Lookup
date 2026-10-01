---
id: "python-en-function-io-textiobase"
language: "python"
lang: "en"
category: "function"
name: "TextIOBase"
directive: "class"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.TextIOBase"
license: "PSF"
updated: "2026-10-01"
---

# TextIOBase

Base class for text streams.  This class provides a character and line based
interface to stream I/O.  It inherits from `IOBase`.

`TextIOBase` provides or overrides these data attributes and
methods in addition to those from `IOBase`:

attribute:: encoding

attribute:: errors

attribute:: newlines

attribute:: buffer

method:: detach()

method:: read(size=-1, /)

method:: readline(size=-1, /)

method:: seek(offset, whence=SEEK_SET, /)

method:: tell()

method:: write(s, /)
