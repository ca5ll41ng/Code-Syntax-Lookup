---
id: "python-en-function-tarfile-linkfallbackerror"
language: "python"
lang: "en"
category: "function"
name: "LinkFallbackError"
directive: "exception"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.LinkFallbackError"
license: "PSF"
updated: "2026-10-01"
---

# LinkFallbackError

Raised to refuse emulating a link (hard or symbolic) by extracting another
archive member, when that member would be rejected by the filter location.
The exception that was raised to reject the replacement member is available
as `BaseException.__context__`.

> *Added in 3.15*
