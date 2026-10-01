---
id: "python-en-function-traceback-print_stack"
language: "python"
lang: "en"
category: "function"
name: "print_stack"
signature: "print_stack(f=None, limit=None, file=None)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.print_stack"
license: "PSF"
updated: "2026-10-01"
---

# print_stack

Print up to *limit* stack trace entries (starting from the invocation
point) if *limit* is positive.  Otherwise, print the last `abs(limit)`
entries.  If *limit* is omitted or `None`, all entries are printed.
The optional *f* argument can be used to specify an alternate
`stack frame`
to start.  The optional *file* argument has the same meaning as for
`print_tb`.

> *Changed in 3.5*: Added negative *limit* support.
