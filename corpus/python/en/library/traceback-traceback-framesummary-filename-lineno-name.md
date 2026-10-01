---
id: "python-en-function-traceback-framesummary-filename-lineno-name"
language: "python"
lang: "en"
category: "function"
name: "FrameSummary(filename, lineno, name, *,\\"
directive: "class"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.FrameSummary(filename, lineno, name, *,\\"
license: "PSF"
updated: "2026-10-01"
---

# FrameSummary(filename, lineno, name, *,\

Represents a single `frame` in the
`traceback` or stack that is being formatted
or printed. It may optionally have a stringified version of the frame's
locals included in it. If *lookup_line* is `False`, the source code is not
looked up until the `FrameSummary` has the `~FrameSummary.line`
attribute accessed (which also happens when casting it to a `tuple`).
`~FrameSummary.line` may be directly provided, and will prevent line
lookups happening at all. *locals* is an optional local variable
mapping, and if supplied the variable representations are stored in the
summary for later display.

`FrameSummary` instances have the following attributes:

attribute:: FrameSummary.filename

attribute:: FrameSummary.lineno

attribute:: FrameSummary.name

attribute:: FrameSummary.line

attribute:: FrameSummary.end_lineno

attribute:: FrameSummary.colno

attribute:: FrameSummary.end_colno
