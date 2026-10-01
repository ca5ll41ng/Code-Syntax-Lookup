---
id: "python-en-function-threading-setprofile"
language: "python"
lang: "en"
category: "function"
name: "setprofile"
signature: "setprofile(func)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.setprofile"
license: "PSF"
updated: "2026-10-01"
---

# setprofile

Set a profile function for all threads started from the `threading` module.
The *func* will be passed to  `sys.setprofile` for each thread, before its
`~Thread.run` method is called.
