---
id: "python-zh-function-pathlib-path-read_bytes"
language: "python"
lang: "zh"
category: "function"
name: "Path.read_bytes"
signature: "Path.read_bytes()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.read_bytes"
license: "PSF"
updated: "2026-10-01"
---

# Path.read_bytes

以字节对象的形式返回路径指向的文件的二进制内容::

   >>> p = Path('my_binary_file')
   >>> p.write_bytes(b'Binary file contents')
   20
   >>> p.read_bytes()
   b'Binary file contents'

> *Added in 3.5*
