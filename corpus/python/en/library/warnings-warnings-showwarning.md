---
id: "python-en-function-warnings-showwarning"
language: "python"
lang: "en"
category: "function"
name: "showwarning"
signature: "showwarning(message, category, filename, lineno, file=None, line=None)"
directive: "function"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.showwarning"
license: "PSF"
updated: "2026-10-01"
---

# showwarning

Write a warning to a file.  The default implementation calls
`formatwarning(message, category, filename, lineno, line)` and writes the
resulting string to *file*, which defaults to `sys.stderr`.  You may replace
this function with any callable by assigning to `warnings.showwarning`.
*line* is a line of source code to be included in the warning
message; if *line* is not supplied, `showwarning` will
try to read the line specified by *filename* and *lineno*.
