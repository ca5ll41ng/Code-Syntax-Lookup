---
id: "python-en-function-zipfile-zipfile-getinfo"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.getinfo"
signature: "ZipFile.getinfo(name)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.getinfo"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.getinfo

Return a `ZipInfo` object with information about the archive member
*name*.  Calling `getinfo` for a name not currently contained in the
archive will raise a `KeyError`.
