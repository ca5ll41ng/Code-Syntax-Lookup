---
id: "python-en-function-traceback-print_last"
language: "python"
lang: "en"
category: "function"
name: "print_last"
signature: "print_last(limit=None, file=None, chain=True)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.print_last"
license: "PSF"
updated: "2026-10-01"
---

# print_last

This is a shorthand for `print_exception(sys.last_exc, limit=limit, file=file,
chain=chain)`.  In general it will work only after an exception has reached
an interactive prompt (see `sys.last_exc`).
