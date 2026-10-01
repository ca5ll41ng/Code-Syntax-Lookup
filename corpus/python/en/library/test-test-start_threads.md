---
id: "python-en-function-test-start_threads"
language: "python"
lang: "en"
category: "function"
name: "start_threads"
signature: "start_threads(threads, unlock=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.start_threads"
license: "PSF"
updated: "2026-10-01"
---

# start_threads

Context manager to start *threads*, which is a sequence of threads.
*unlock* is a function called after the threads are started, even if an
exception was raised; an example would be `threading.Event.set`.
`start_threads` will attempt to join the started threads upon exit.
