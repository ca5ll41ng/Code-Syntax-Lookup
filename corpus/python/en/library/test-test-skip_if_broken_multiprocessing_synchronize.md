---
id: "python-en-function-test-skip_if_broken_multiprocessing_synchronize"
language: "python"
lang: "en"
category: "function"
name: "skip_if_broken_multiprocessing_synchronize"
signature: "skip_if_broken_multiprocessing_synchronize()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.skip_if_broken_multiprocessing_synchronize"
license: "PSF"
updated: "2026-10-01"
---

# skip_if_broken_multiprocessing_synchronize

Skip tests if the `multiprocessing.synchronize` module is missing, if
there is no available semaphore implementation, or if creating a lock raises
an `OSError`.

> *Added in 3.10*
