---
id: "python-en-function-queue-empty"
language: "python"
lang: "en"
category: "function"
name: "Empty"
directive: "exception"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Empty"
license: "PSF"
updated: "2026-10-01"
---

# Empty

Exception raised when non-blocking `~Queue.get` (or
`~Queue.get_nowait`) is called
on a `Queue` object which is empty.
