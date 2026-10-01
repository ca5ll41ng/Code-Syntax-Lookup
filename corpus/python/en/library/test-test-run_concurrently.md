---
id: "python-en-function-test-run_concurrently"
language: "python"
lang: "en"
category: "function"
name: "run_concurrently"
signature: "run_concurrently(worker_func, nthreads, args=(), kwargs={})"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.run_concurrently"
license: "PSF"
updated: "2026-10-01"
---

# run_concurrently

Run the worker function concurrently in multiple threads.
Re-raises an exception if any thread raises one, after all threads have
finished.
