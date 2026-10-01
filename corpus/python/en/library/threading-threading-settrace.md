---
id: "python-en-function-threading-settrace"
language: "python"
lang: "en"
category: "function"
name: "settrace"
signature: "settrace(func)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.settrace"
license: "PSF"
updated: "2026-10-01"
---

# settrace

Set a trace function for all threads started from the `threading` module.
The *func* will be passed to  `sys.settrace` for each thread, before its
`~Thread.run` method is called.
