---
id: "python-en-function-decimal-have_contextvar"
language: "python"
lang: "en"
category: "function"
name: "HAVE_CONTEXTVAR"
directive: "data"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.HAVE_CONTEXTVAR"
license: "PSF"
updated: "2026-10-01"
---

# HAVE_CONTEXTVAR

The default value is `True`. If Python is `configured using
the --without-decimal-contextvar option`,
the C version uses a thread-local rather than a coroutine-local context and the value
is `False`.  This is slightly faster in some nested context scenarios.

> *Added in 3.8.3*
