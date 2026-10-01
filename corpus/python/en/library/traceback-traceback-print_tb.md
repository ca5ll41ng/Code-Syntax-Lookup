---
id: "python-en-function-traceback-print_tb"
language: "python"
lang: "en"
category: "function"
name: "print_tb"
signature: "print_tb(tb, limit=None, file=None)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.print_tb"
license: "PSF"
updated: "2026-10-01"
---

# print_tb

Print up to *limit* stack trace entries from
`traceback object` *tb* (starting
from the caller's frame) if *limit* is positive.  Otherwise, print the last
`abs(limit)` entries.  If *limit* is omitted or `None`, all entries are
printed.  If *file* is omitted or `None`, the output goes to
`sys.stderr`; otherwise it should be an open
`file` or `file-like object` to
receive the output.

> **Note**
>
> The meaning of the *limit* parameter is different than the meaning
> of `sys.tracebacklimit`. A negative *limit* value corresponds to
> a positive value of `sys.tracebacklimit`, whereas the behaviour of
> a positive *limit* value cannot be achieved with
> `sys.tracebacklimit`.
>

> *Changed in 3.5*: Added negative *limit* support.
