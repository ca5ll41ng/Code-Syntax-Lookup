---
id: "python-en-function-inspect-getmro"
language: "python"
lang: "en"
category: "function"
name: "getmro"
signature: "getmro(cls)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getmro"
license: "PSF"
updated: "2026-10-01"
---

# getmro

Return a tuple of class cls's base classes, including cls, in method resolution
order.  No class appears more than once in this tuple. Note that the method
resolution order depends on cls's type.  Unless a very peculiar user-defined
metatype is in use, cls will be the first element of the tuple.
