---
id: "python-en-function-compression-zstd-zstd_version_info"
language: "python"
lang: "en"
category: "function"
name: "ZSTD_VERSION_INFO"
directive: "data"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.ZSTD_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# ZSTD_VERSION_INFO

A named tuple containing the three components of the zstd library
version that was used for building the module:
*major*, *minor*, and *patch*.  All values are integers.
The components can also be accessed by name, so `zstd.ZSTD_VERSION_INFO[0]`
is equivalent to `zstd.ZSTD_VERSION_INFO.major` and so on.
This may be different from the zstd library actually used at runtime, which
is available as `zstd_version_info`.

> *Added in next*
