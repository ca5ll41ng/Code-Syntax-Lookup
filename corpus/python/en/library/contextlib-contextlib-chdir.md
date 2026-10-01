---
id: "python-en-function-contextlib-chdir"
language: "python"
lang: "en"
category: "function"
name: "chdir"
signature: "chdir(path)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.chdir"
license: "PSF"
updated: "2026-10-01"
---

# chdir

Non parallel-safe context manager to change the current working directory.
As this changes a global state, the working directory, it is not suitable
for use in most threaded or async contexts. It is also not suitable for most
non-linear code execution, like generators, where the program execution is
temporarily relinquished -- unless explicitly desired, you should not yield
when this context manager is active.

This is a simple wrapper around `~os.chdir`, it changes the current
working directory upon entering and restores the old one on exit.

This context manager is `reentrant`.

> *Added in 3.11*
