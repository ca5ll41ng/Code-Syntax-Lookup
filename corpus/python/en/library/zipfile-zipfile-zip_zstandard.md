---
id: "python-en-function-zipfile-zip_zstandard"
language: "python"
lang: "en"
category: "function"
name: "ZIP_ZSTANDARD"
directive: "data"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZIP_ZSTANDARD"
license: "PSF"
updated: "2026-10-01"
---

# ZIP_ZSTANDARD

The numeric constant for Zstandard compression. This requires the
`compression.zstd` module.

> **Note**
>
> In APPNOTE 6.3.7, the method ID `20` was assigned to Zstandard
> compression. This was changed in APPNOTE 6.3.8 to method ID `93` to
> avoid conflicts, with method ID `20` being deprecated. For
> compatibility, the `zipfile` module reads both method IDs but will
> only write data with method ID `93`.
>

> *Added in 3.14*
