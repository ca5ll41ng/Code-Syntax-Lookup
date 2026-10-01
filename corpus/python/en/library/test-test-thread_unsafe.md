---
id: "python-en-function-test-thread_unsafe"
language: "python"
lang: "en"
category: "function"
name: "thread_unsafe"
signature: "thread_unsafe(reason=None)"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.thread_unsafe"
license: "PSF"
updated: "2026-10-01"
---

# thread_unsafe

Decorator for marking tests as thread-unsafe.  This test always runs in one
thread even when invoked with `--parallel-threads`.
