---
id: "python-zh-function-io-rawiobase"
language: "python"
lang: "zh"
category: "function"
name: "RawIOBase"
directive: "class"
module: "io"
source_url: "https://docs.python.org/zh-cn/3/library/io.html#io.RawIOBase"
license: "PSF"
updated: "2026-10-01"
---

# RawIOBase

原始二进制流的基类。 它继承自 :class:`IOBase`。

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
