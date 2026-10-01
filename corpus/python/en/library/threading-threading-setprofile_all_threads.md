---
id: "python-en-function-threading-setprofile_all_threads"
language: "python"
lang: "en"
category: "function"
name: "setprofile_all_threads"
signature: "setprofile_all_threads(func)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.setprofile_all_threads"
license: "PSF"
updated: "2026-10-01"
---

# setprofile_all_threads

Set a profile function for all threads started from the `threading` module
and all Python threads that are currently executing.

The *func* will be passed to  `sys.setprofile` for each thread, before its
`~Thread.run` method is called.

> *Added in 3.12*
