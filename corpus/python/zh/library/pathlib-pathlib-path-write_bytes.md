---
id: "python-zh-function-pathlib-path-write_bytes"
language: "python"
lang: "zh"
category: "function"
name: "Path.write_bytes"
signature: "Path.write_bytes(data)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.write_bytes"
license: "PSF"
updated: "2026-10-01"
---

# Path.write_bytes

Open the file pointed to in bytes mode, write *data* to it, and close the
file::

   >>> p = Path('my_binary_file')
   >>> p.write_bytes(b'Binary file contents')
   20
   >>> p.read_bytes()
   b'Binary file contents'

Return the number of bytes written.

一个同名的现存文件将被覆盖。

> *Added in 3.5*
