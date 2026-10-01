---
id: "python-en-function-reprlib-reprlib"
language: "python"
lang: "en"
category: "function"
name: "reprlib"
title: "Subclassing Repr Objects"
directive: "module"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#module-reprlib"
license: "PSF"
updated: "2026-10-01"
---

# Subclassing Repr Objects

.. _subclassing-reprs:

**Subclassing Repr Objects**

The use of dynamic dispatching by `Repr.repr1` allows subclasses of
`Repr` to add support for additional built-in object types or to modify
the handling of types already supported. This example shows how special support
for file objects could be added:

```python

import reprlib
import sys

class MyRepr(reprlib.Repr):

    def repr_TextIOWrapper(self, obj, level):
        if obj.name in {'<stdin>', '<stdout>', '<stderr>'}:
            return obj.name
        return repr(obj)

aRepr = MyRepr()
print(aRepr.repr(sys.stdin))         # prints '<stdin>'
```

testoutput::
