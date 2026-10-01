---
id: "python-zh-function-doctest-script_from_examples"
language: "python"
lang: "zh"
category: "function"
name: "script_from_examples"
signature: "script_from_examples(s)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.script_from_examples"
license: "PSF"
updated: "2026-10-01"
---

# script_from_examples

将带有用例的文本转换为脚本。

Argument *s* is a string containing doctest examples.  The string is converted
to a Python script, where doctest examples in *s* are converted to regular code,
and everything else is converted to Python comments.  The generated script is
returned as a string. For example, ::

   import doctest
   print(doctest.script_from_examples(r"""
       Set x and y to 1 and 2.
       >>> x, y = 1, 2

       Print their sum:
       >>> print(x+y)
       3
   """))

显示::

   # Set x and y to 1 and 2.
   x, y = 1, 2
   #
   # Print their sum:
   print(x+y)
   # Expected:
   ## 3

This function is used internally by other functions (see below), but can also be
useful when you want to transform an interactive Python session into a Python
script.
