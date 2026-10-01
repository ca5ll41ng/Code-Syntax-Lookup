---
id: "python-en-function-sys-orig_argv"
language: "python"
lang: "en"
category: "function"
name: "orig_argv"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.orig_argv"
license: "PSF"
updated: "2026-10-01"
---

# orig_argv

The list of the original command line arguments passed to the Python
executable.

The elements of `sys.orig_argv` are the arguments to the Python interpreter,
while the elements of `sys.argv` are the arguments to the user's program.
Arguments consumed by the interpreter itself will be present in `sys.orig_argv`
and missing from `sys.argv`.

> *Added in 3.10*
