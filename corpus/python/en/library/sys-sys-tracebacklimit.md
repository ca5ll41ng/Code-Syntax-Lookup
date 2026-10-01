---
id: "python-en-function-sys-tracebacklimit"
language: "python"
lang: "en"
category: "function"
name: "tracebacklimit"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.tracebacklimit"
license: "PSF"
updated: "2026-10-01"
---

# tracebacklimit

When this variable is set to an integer value, it determines the maximum number
of levels of traceback information printed when an unhandled exception occurs.
The default is `1000`.  When set to `0` or less, all traceback information
is suppressed and only the exception type and value are printed.
