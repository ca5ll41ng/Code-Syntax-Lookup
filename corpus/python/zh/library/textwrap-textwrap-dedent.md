---
id: "python-zh-function-textwrap-dedent"
language: "python"
lang: "zh"
category: "function"
name: "dedent"
signature: "dedent(text)"
directive: "function"
module: "textwrap"
source_url: "https://docs.python.org/zh-cn/3/library/textwrap.html#textwrap.dedent"
license: "PSF"
updated: "2026-10-01"
---

# dedent

移除 *text* 中每一行的任何相同前缀空白符。

This can be used to make triple-quoted strings line up with the left edge of the
display, while still presenting them in the source code in indented form.

Note that tabs and spaces are both treated as whitespace, but they are not
equal: the lines `"  hello"` and `"\thello"` are considered to have no
common leading whitespace.

Lines containing only whitespace are ignored in the input and normalized to a
single newline character in the output.

例如::

   def test():
       # end first line with \ to avoid the empty line!
       s = '''\
       hello
         world
       '''
       print(repr(s))          # prints '    hello\n      world\n    '
       print(repr(dedent(s)))  # prints 'hello\n  world\n'

> *Changed in 3.14*: The :func:`!dedent` function now correctly normalizes blank lines containing only whitespace characters. Previously, the implementation only normalized blank lines containing tabs and spaces.
