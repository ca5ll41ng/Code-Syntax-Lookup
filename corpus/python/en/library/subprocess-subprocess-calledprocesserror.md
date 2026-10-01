---
id: "python-en-function-subprocess-calledprocesserror"
language: "python"
lang: "en"
category: "function"
name: "CalledProcessError"
directive: "exception"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.CalledProcessError"
license: "PSF"
updated: "2026-10-01"
---

# CalledProcessError

Subclass of `SubprocessError`, raised when a process run by
`check_call`, `check_output`, or `run` (with `check=True`)
returns a non-zero exit status.

attribute:: returncode

attribute:: cmd

attribute:: output

attribute:: stdout

attribute:: stderr

> *Changed in 3.5*: *stdout* and *stderr* attributes added
