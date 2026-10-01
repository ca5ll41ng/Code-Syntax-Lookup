---
id: "python-en-function-traceback-extract_tb"
language: "python"
lang: "en"
category: "function"
name: "extract_tb"
signature: "extract_tb(tb, limit=None)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.extract_tb"
license: "PSF"
updated: "2026-10-01"
---

# extract_tb

Return a `StackSummary` object representing a list of "pre-processed"
stack trace entries extracted from the
`traceback object` *tb*.  It is useful
for alternate formatting of stack traces.  The optional *limit* argument has
the same meaning as for `print_tb`.  A "pre-processed" stack trace
entry is a `FrameSummary` object with attributes representing the
information that is usually printed for a stack trace.
