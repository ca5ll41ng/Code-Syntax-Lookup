---
id: "python-en-function-collections-userdict"
language: "python"
lang: "en"
category: "function"
name: "UserDict"
signature: "UserDict(**kwargs)"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.UserDict"
license: "PSF"
updated: "2026-10-01"
---

# UserDict

Class that simulates a dictionary.  The instance's contents are kept in a
regular dictionary, which is accessible via the `data` attribute of
`UserDict` instances.  If arguments are provided, they are used to
initialize `data`, like a regular dictionary.

In addition to supporting the methods and operations of mappings,
`UserDict` instances provide the following attribute:

attribute:: data

`UserDict` instances also override the following method:

method:: popitem
