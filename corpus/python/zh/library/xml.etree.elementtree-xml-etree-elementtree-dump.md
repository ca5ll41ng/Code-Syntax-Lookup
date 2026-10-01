---
id: "python-zh-function-xml-etree-elementtree-dump"
language: "python"
lang: "zh"
category: "function"
name: "dump"
signature: "dump(elem)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/zh-cn/3/library/xml.etree.elementtree.html#xml.etree.elementtree.dump"
license: "PSF"
updated: "2026-10-01"
---

# dump

Writes an element tree or element structure to sys.stdout.  This function
should be used for debugging only.

The exact output format is implementation dependent.  In this version, it's
written as an ordinary XML file.

*elem* 是一个元素树或单独元素。

> *Changed in 3.8*: The :func:`dump` function now preserves the attribute order specified by the user.
