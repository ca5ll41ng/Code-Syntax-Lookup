---
id: "python-en-function-traceback-format_list"
language: "python"
lang: "en"
category: "function"
name: "format_list"
signature: "format_list(extracted_list)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.format_list"
license: "PSF"
updated: "2026-10-01"
---

# format_list

Given a list of tuples or `FrameSummary` objects as returned by
`extract_tb` or `extract_stack`, return a list of strings ready
for printing.  Each string in the resulting list corresponds to the item with
the same index in the argument list.  Each string ends in a newline; the
strings may contain internal newlines as well, for those items whose source
text line is not `None`.
