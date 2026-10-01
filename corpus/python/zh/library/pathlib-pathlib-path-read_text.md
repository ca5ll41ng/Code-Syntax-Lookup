---
id: "python-zh-function-pathlib-path-read_text"
language: "python"
lang: "zh"
category: "function"
name: "Path.read_text"
signature: "Path.read_text(encoding=None, errors=None, newline=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.read_text"
license: "PSF"
updated: "2026-10-01"
---

# Path.read_text

以字符串形式返回路径指向的文件的解码后文本内容::

   >>> p = Path('my_text_file')
   >>> p.write_text('Text file contents')
   18
   >>> p.read_text()
   'Text file contents'

The file is opened and then closed. The optional parameters have the same
meaning as in `open`.

> *Added in 3.5*

> *Changed in 3.13*: The *newline* parameter was added.
