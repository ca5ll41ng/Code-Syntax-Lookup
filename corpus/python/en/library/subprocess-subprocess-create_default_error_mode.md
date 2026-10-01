---
id: "python-en-function-subprocess-create_default_error_mode"
language: "python"
lang: "en"
category: "function"
name: "CREATE_DEFAULT_ERROR_MODE"
directive: "data"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.CREATE_DEFAULT_ERROR_MODE"
license: "PSF"
updated: "2026-10-01"
---

# CREATE_DEFAULT_ERROR_MODE

A `Popen` `creationflags` parameter to specify that a new process
does not inherit the error mode of the calling process. Instead, the new
process gets the default error mode.
This feature is particularly useful for multithreaded shell applications
that run with hard errors disabled.

> *Added in 3.7*
