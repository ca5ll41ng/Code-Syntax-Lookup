---
id: "python-zh-guide-cporting-cporting"
language: "python"
lang: "zh"
category: "guide"
name: "cporting"
title: "*************************************"
module: "cporting"
source_url: "https://docs.python.org/zh-cn/3/howto/cporting.html"
license: "PSF"
updated: "2026-10-01"
---

# *************************************

.. _cporting-howto:

*************************************
Porting Extension Modules to Python 3
*************************************

对于将扩展模块移植到 Python 3，我们推荐下列资源：

* The `Migrating C extensions`_ chapter from
  *Supporting Python 3: An in-depth guide*, a book on moving from Python 2
  to Python 3 in general, guides the reader through porting an extension
  module.
* The `Porting guide`_ from the *py3c* project provides opinionated
  suggestions with supporting code.
* `Recommended third party tools` offer abstractions over
  the Python's C API.
  Extensions generally need to be re-written to use one of them,
  but the library then handles differences between various Python
  versions and implementations.

.. _Migrating C extensions: http://python3porting.com/cextensions.html
.. _Porting guide: https://py3c.readthedocs.io/en/latest/guide.html
