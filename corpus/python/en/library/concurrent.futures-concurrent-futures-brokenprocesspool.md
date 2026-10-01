---
id: "python-en-function-concurrent-futures-brokenprocesspool"
language: "python"
lang: "en"
category: "function"
name: "BrokenProcessPool"
directive: "exception"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.BrokenProcessPool"
license: "PSF"
updated: "2026-10-01"
---

# BrokenProcessPool

Derived from `~concurrent.futures.BrokenExecutor` (formerly
`RuntimeError`), this exception class is raised when one of the
workers of a `~concurrent.futures.ProcessPoolExecutor`
has terminated in a non-clean
fashion (for example, if it was killed from the outside).

> *Added in 3.3*
