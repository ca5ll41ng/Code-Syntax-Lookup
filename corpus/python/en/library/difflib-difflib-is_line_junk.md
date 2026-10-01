---
id: "python-en-function-difflib-is_line_junk"
language: "python"
lang: "en"
category: "function"
name: "IS_LINE_JUNK"
signature: "IS_LINE_JUNK(line)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.IS_LINE_JUNK"
license: "PSF"
updated: "2026-10-01"
---

# IS_LINE_JUNK

Return `True` for ignorable lines.  The line *line* is ignorable if *line* is
blank or contains a single `'#'`, otherwise it is not ignorable.  Used as a
default for parameter *linejunk* in `ndiff` in older versions.
