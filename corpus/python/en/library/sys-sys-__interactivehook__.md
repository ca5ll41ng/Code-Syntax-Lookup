---
id: "python-en-function-sys-__interactivehook__"
language: "python"
lang: "en"
category: "function"
name: "__interactivehook__"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.__interactivehook__"
license: "PSF"
updated: "2026-10-01"
---

# __interactivehook__

When this attribute exists, its value is automatically called (with no
arguments) when the interpreter is launched in `interactive mode`.  This is done after the `PYTHONSTARTUP` file is
read, so that you can set this hook there.  The `site` module
`sets this`.

audit-event:: cpython.run_interactivehook hook sys.__interactivehook__

> *Added in 3.4*
