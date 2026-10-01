---
id: "python-en-function-resource-getrlimit"
language: "python"
lang: "en"
category: "function"
name: "getrlimit"
signature: "getrlimit(resource)"
directive: "function"
module: "resource"
source_url: "https://docs.python.org/3/library/resource.html#resource.getrlimit"
license: "PSF"
updated: "2026-10-01"
---

# getrlimit

Returns a tuple `(soft, hard)` with the current soft and hard limits of
*resource*. Raises `ValueError` if an invalid resource is specified, or
`error` if the underlying system call fails unexpectedly.
