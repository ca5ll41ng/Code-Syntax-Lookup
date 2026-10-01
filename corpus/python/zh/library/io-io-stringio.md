---
id: "python-zh-function-io-stringio"
language: "python"
lang: "zh"
category: "function"
name: "StringIO"
signature: "StringIO(initial_value='', newline='\\n')"
directive: "class"
module: "io"
source_url: "https://docs.python.org/zh-cn/3/library/io.html#io.StringIO"
license: "PSF"
updated: "2026-10-01"
---

# StringIO

A text stream using an in-memory text buffer.  It inherits from
`TextIOBase`.

The text buffer is discarded when the `~IOBase.close` method is
called.

The initial value of the buffer can be set by providing *initial_value*.
If newline translation is enabled, newlines will be encoded as if by
`~TextIOBase.write`.  The stream is positioned at the start of the
buffer which emulates opening an existing file in a `w+` mode, making it
ready for an immediate write from the beginning or for a write that
would overwrite the initial value.  To emulate opening a file in an `a+`
mode ready for appending, use `f.seek(0, io.SEEK_END)` to reposition the
stream at the end of the buffer.

The *newline* argument works like that of `TextIOWrapper`,
except that when writing output to the stream, if *newline* is `None`,
newlines are written as `\n` on all platforms.

`StringIO` provides this method in addition to those from
`TextIOBase` and `IOBase`:

method:: getvalue()

用法示例::

   import io

   output = io.StringIO()
   output.write('First line.\n')
   print('Second line.', file=output)

   # Retrieve file contents -- this will be
   # 'First line.\nSecond line.\n'
   contents = output.getvalue()

   # Close object and discard memory buffer --
   # .getvalue() will now raise an exception.
   output.close()
