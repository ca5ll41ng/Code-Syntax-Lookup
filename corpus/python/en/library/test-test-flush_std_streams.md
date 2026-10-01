---
id: "python-en-function-test-flush_std_streams"
language: "python"
lang: "en"
category: "function"
name: "flush_std_streams"
signature: "flush_std_streams()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.flush_std_streams"
license: "PSF"
updated: "2026-10-01"
---

# flush_std_streams

Call the `flush()` method on `sys.stdout` and then on
`sys.stderr`. It can be used to make sure that the logs order is
consistent before writing into stderr.

> *Added in 3.11*
