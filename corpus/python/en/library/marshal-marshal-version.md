---
id: "python-en-function-marshal-version"
language: "python"
lang: "en"
category: "function"
name: "version"
directive: "data"
module: "marshal"
source_url: "https://docs.python.org/3/library/marshal.html#marshal.version"
license: "PSF"
updated: "2026-10-01"
---

# version

Indicates the format that the module uses.
Version 0 is the historical first version; subsequent versions
add new features.
Generally, a new version becomes the default when it is introduced.

======= =============== ====================================================
Version Available since New features
======= =============== ====================================================
1       Python 2.4      Sharing interned strings
------- --------------- ----------------------------------------------------
2       Python 2.5      Binary representation of floats
------- --------------- ----------------------------------------------------
3       Python 3.4      Support for object instancing and recursion
------- --------------- ----------------------------------------------------
4       Python 3.4      Efficient representation of short strings
------- --------------- ----------------------------------------------------
5       Python 3.14     Support for `slice` objects
------- --------------- ----------------------------------------------------
6       Python 3.15     Support for `frozendict` objects
======= =============== ====================================================
