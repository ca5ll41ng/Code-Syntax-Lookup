---
id: "python-en-function-warnings-formatwarning"
language: "python"
lang: "en"
category: "function"
name: "formatwarning"
signature: "formatwarning(message, category, filename, lineno, line=None)"
directive: "function"
module: "warnings"
source_url: "https://docs.python.org/3/library/warnings.html#warnings.formatwarning"
license: "PSF"
updated: "2026-10-01"
---

# formatwarning

Format a warning the standard way.  This returns a string which may contain
embedded newlines and ends in a newline.  *line* is a line of source code to
be included in the warning message; if *line* is not supplied,
`formatwarning` will try to read the line specified by *filename* and
*lineno*.
