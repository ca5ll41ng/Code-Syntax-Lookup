---
id: "python-zh-function-reprlib-repr-maxlevel-6-maxtuple-6-maxlist-6-maxarray-5-maxdict-4"
language: "python"
lang: "zh"
category: "function"
name: "Repr(*, maxlevel=6, maxtuple=6, maxlist=6, maxarray=5, maxdict=4, \\"
directive: "class"
module: "reprlib"
source_url: "https://docs.python.org/zh-cn/3/library/reprlib.html#reprlib.Repr(*, maxlevel=6, maxtuple=6, maxlist=6, maxarray=5, maxdict=4, \\"
license: "PSF"
updated: "2026-10-01"
---

# Repr(*, maxlevel=6, maxtuple=6, maxlist=6, maxarray=5, maxdict=4, \

Class which provides formatting services useful in implementing functions
similar to the built-in `repr`; size limits for  different object types
are added to avoid the generation of representations which are excessively long.

The keyword arguments of the constructor can be used as a shortcut to set the
attributes of the `Repr` instance. Which means that the following
initialization::

   aRepr = reprlib.Repr(maxlevel=3)

等价于::

   aRepr = reprlib.Repr()
   aRepr.maxlevel = 3

See section `Repr Objects`_ for more information about `Repr`
attributes.

> *Changed in 3.12*: Allow attributes to be set via keyword arguments.
