---
id: "python-en-function-msvcrt-crtsetreportfile"
language: "python"
lang: "en"
category: "function"
name: "CrtSetReportFile"
signature: "CrtSetReportFile(type, file)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.CrtSetReportFile"
license: "PSF"
updated: "2026-10-01"
---

# CrtSetReportFile

After you use `CrtSetReportMode` to specify `CRTDBG_MODE_FILE`,
you can specify the file handle to receive the message text. *type* must be
one of the `CRT_\*` constants listed below. *file* should be the file
handle your want specified. Only available in
`debug build of Python`.
