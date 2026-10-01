---
id: "python-en-function-os-abort"
language: "python"
lang: "en"
category: "function"
name: "abort"
signature: "abort()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.abort"
license: "PSF"
updated: "2026-10-01"
---

# abort

Generate a `~signal.SIGABRT` signal to the current process.  On Unix, the default
behavior is to produce a core dump; on Windows, the process immediately returns
an exit code of `3`.  Be aware that calling this function will not call the
Python signal handler registered for `~signal.SIGABRT` with
`signal.signal`.
