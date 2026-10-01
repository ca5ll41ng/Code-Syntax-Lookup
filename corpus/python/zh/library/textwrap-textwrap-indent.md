---
id: "python-zh-function-textwrap-indent"
language: "python"
lang: "zh"
category: "function"
name: "indent"
signature: "indent(text, prefix, predicate=None)"
directive: "function"
module: "textwrap"
source_url: "https://docs.python.org/zh-cn/3/library/textwrap.html#textwrap.indent"
license: "PSF"
updated: "2026-10-01"
---

# indent

将 *prefix* 添加到 *text* 中选定行的开头。

通过调用 ``text.splitlines(True)`` 来对行进行拆分。

By default, *prefix* is added to all lines that do not consist
solely of whitespace (including any line endings).

例如::

   >>> s = 'hello\n\n \nworld'
   >>> indent(s, '  ')
   '  hello\n\n \n  world'

The optional *predicate* argument can be used to control which lines
are indented. For example, it is easy to add *prefix* to even empty
and whitespace-only lines::

   >>> print(indent(s, '+ ', lambda line: True))
   + hello
   +
   +
   + world

> *Added in 3.3*
