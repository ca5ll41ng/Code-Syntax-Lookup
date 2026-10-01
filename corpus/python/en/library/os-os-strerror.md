---
id: "python-en-function-os-strerror"
language: "python"
lang: "en"
category: "function"
name: "strerror"
signature: "strerror(code, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.strerror"
license: "PSF"
updated: "2026-10-01"
---

# strerror

Return the error message corresponding to the error code in *code*.
On platforms where :c`strerror` returns `NULL` when given an unknown
error number, `ValueError` is raised.
