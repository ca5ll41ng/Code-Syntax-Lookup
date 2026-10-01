---
id: "python-zh-function-doctest-outputchecker"
language: "python"
lang: "zh"
category: "function"
name: "OutputChecker"
signature: "OutputChecker()"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.OutputChecker"
license: "PSF"
updated: "2026-10-01"
---

# OutputChecker

A class used to check the whether the actual output from a doctest example
matches the expected output.  `OutputChecker` defines two methods:
`check_output`, which compares a given pair of outputs, and returns `True`
if they match; and `output_difference`, which returns a string describing
the differences between two outputs.

:class:`OutputChecker` 定义了以下方法：

method:: check_output(want, got, optionflags)

method:: output_difference(example, got, optionflags)
