---
id: "python-en-function-os-sf_nocache"
language: "python"
lang: "en"
category: "function"
name: "SF_NOCACHE"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.SF_NOCACHE"
license: "PSF"
updated: "2026-10-01"
---

# SF_NOCACHE

Parameter to the `sendfile` function, if the implementation supports
it. The data won't be cached in the virtual memory and will be freed afterwards.

availability:: Unix, not WASI.

> *Added in 3.11*
