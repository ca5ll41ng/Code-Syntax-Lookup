---
id: "python-en-function-multiprocessing-joinablequeue"
language: "python"
lang: "en"
category: "function"
name: "JoinableQueue"
signature: "JoinableQueue([maxsize])"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.JoinableQueue"
license: "PSF"
updated: "2026-10-01"
---

# JoinableQueue

`JoinableQueue`, a `Queue` subclass, is a queue which
additionally has `task_done` and `join` methods.

Instantiating this class may set the global start method. See
`global-start-method` for more details.

method:: task_done()

method:: join()
