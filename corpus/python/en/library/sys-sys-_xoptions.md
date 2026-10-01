---
id: "python-en-function-sys-_xoptions"
language: "python"
lang: "en"
category: "function"
name: "_xoptions"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys._xoptions"
license: "PSF"
updated: "2026-10-01"
---

# _xoptions

A dictionary of the various implementation-specific flags passed through
the `-X` command-line option.  Option names are either mapped to
their values, if given explicitly, or to `True`.  Example:

```shell-session

$ ./python -Xa=b -Xc
Python 3.2a3+ (py3k, Oct 16 2010, 20:14:50)
[GCC 4.4.3] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys
>>> sys._xoptions
{'a': 'b', 'c': True}
```

impl-detail::

> *Added in 3.2*
