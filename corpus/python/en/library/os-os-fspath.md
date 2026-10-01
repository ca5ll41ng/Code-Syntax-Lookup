---
id: "python-en-function-os-fspath"
language: "python"
lang: "en"
category: "function"
name: "fspath"
signature: "fspath(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fspath"
license: "PSF"
updated: "2026-10-01"
---

# fspath

Return the file system representation of the path.

If `str` or `bytes` is passed in, it is returned unchanged.
Otherwise `~os.PathLike.__fspath__` is called and its value is
returned as long as it is a `str` or `bytes` object.
In all other cases, `TypeError` is raised.

> *Added in 3.6*
