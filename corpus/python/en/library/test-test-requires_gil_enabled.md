---
id: "python-en-function-test-requires_gil_enabled"
language: "python"
lang: "en"
category: "function"
name: "requires_gil_enabled"
directive: "decorator"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.requires_gil_enabled"
license: "PSF"
updated: "2026-10-01"
---

# requires_gil_enabled

Decorator for skipping tests on the free-threaded build.  If the
`GIL` is disabled, the test is skipped.
