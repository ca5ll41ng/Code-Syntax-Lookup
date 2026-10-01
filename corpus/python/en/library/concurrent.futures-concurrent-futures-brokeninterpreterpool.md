---
id: "python-en-function-concurrent-futures-brokeninterpreterpool"
language: "python"
lang: "en"
category: "function"
name: "BrokenInterpreterPool"
directive: "exception"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.BrokenInterpreterPool"
license: "PSF"
updated: "2026-10-01"
---

# BrokenInterpreterPool

Derived from `~concurrent.futures.thread.BrokenThreadPool`,
this exception class is raised when one of the workers
of a `~concurrent.futures.InterpreterPoolExecutor`
has failed initializing.

> *Added in 3.14*
