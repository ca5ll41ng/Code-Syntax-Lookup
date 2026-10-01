---
id: "python-en-function-functools-functools"
language: "python"
lang: "en"
category: "function"
name: "functools"
title: "`partial` objects are like `function objects` in that they are"
directive: "module"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#module-functools"
license: "PSF"
updated: "2026-10-01"
---

# `partial` objects are like `function objects` in that they are

`partial` objects are like `function objects` in that they are
callable, weak referenceable, and can have attributes.  There are some important
differences.  For instance, the `~definition.__name__` and `~definition.__doc__` attributes
are not created automatically.
