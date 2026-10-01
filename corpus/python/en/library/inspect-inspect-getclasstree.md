---
id: "python-en-function-inspect-getclasstree"
language: "python"
lang: "en"
category: "function"
name: "getclasstree"
signature: "getclasstree(classes, unique=False)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getclasstree"
license: "PSF"
updated: "2026-10-01"
---

# getclasstree

Arrange the given list of classes into a hierarchy of nested lists. Where a
nested list appears, it contains classes derived from the class whose entry
immediately precedes the list.  Each entry is a 2-tuple containing a class and a
tuple of its base classes.  If the *unique* argument is true, exactly one entry
appears in the returned structure for each class in the given list.  Otherwise,
classes using multiple inheritance and their descendants will appear multiple
times.
