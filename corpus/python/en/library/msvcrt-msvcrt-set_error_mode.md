---
id: "python-en-function-msvcrt-set_error_mode"
language: "python"
lang: "en"
category: "function"
name: "set_error_mode"
signature: "set_error_mode(mode)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.set_error_mode"
license: "PSF"
updated: "2026-10-01"
---

# set_error_mode

Changes the location where the C runtime writes an error message for an error
that might end the program. *mode* must be one of the `OUT_\*`
constants listed below  or `REPORT_ERRMODE`. Returns the old setting
or -1 if an error occurs. Only available in
`debug build of Python`.
