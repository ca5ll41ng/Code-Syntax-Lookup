---
id: "python-zh-function-doctest-doctestparser"
language: "python"
lang: "zh"
category: "function"
name: "DocTestParser"
signature: "DocTestParser()"
directive: "class"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.DocTestParser"
license: "PSF"
updated: "2026-10-01"
---

# DocTestParser

A processing class used to extract interactive examples from a string, and use
them to create a `DocTest` object.

:class:`DocTestParser` 定义了以下方法：

method:: get_doctest(string, globs, name, filename, lineno)

method:: get_examples(string, name='<string>')

method:: parse(string, name='<string>')
