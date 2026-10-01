---
id: "python-en-function-decimal-libmpdec_version_info"
language: "python"
lang: "en"
category: "function"
name: "LIBMPDEC_VERSION_INFO"
directive: "data"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.LIBMPDEC_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# LIBMPDEC_VERSION_INFO

A named tuple containing the three components of the libmpdec library
version that was used for building the module:
*major*, *minor*, and *micro*.
All values are integers.
The components can also be accessed by name,
so `decimal.LIBMPDEC_VERSION_INFO[0]` is equivalent to
`decimal.LIBMPDEC_VERSION_INFO.major` and so on.
This may be different from the libmpdec library actually used at runtime,
which is available as `libmpdec_version_info`.

> *Added in next*
