---
id: "python-en-function-pyexpat-version_info"
language: "python"
lang: "en"
category: "function"
name: "VERSION_INFO"
directive: "data"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# VERSION_INFO

A named tuple containing the three components of the Expat library
version that was used for building the module:
*major*, *minor*, and *micro*.
All values are integers.
The components can also be accessed by name,
so `xml.parsers.expat.VERSION_INFO[0]` is equivalent to
`xml.parsers.expat.VERSION_INFO.major` and so on.
This may be different from the Expat library actually used at runtime,
which is available as `version_info`.

> *Added in next*
