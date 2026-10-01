---
id: "python-en-function-dbm-gdbm_version_info"
language: "python"
lang: "en"
category: "function"
name: "GDBM_VERSION_INFO"
directive: "data"
module: "dbm"
source_url: "https://docs.python.org/3/library/dbm.html#dbm.GDBM_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# GDBM_VERSION_INFO

A named tuple containing the three components of the GDBM library
version that was used for building the module:
*major*, *minor*, and *patch*.
All values are integers.
The components can also be accessed by name,
so `dbm.gnu.GDBM_VERSION_INFO[0]` is equivalent to
`dbm.gnu.GDBM_VERSION_INFO.major` and so on.
This may be different from the GDBM library actually used at runtime,
which is available as `gdbm_version_info`.

> *Added in next*
