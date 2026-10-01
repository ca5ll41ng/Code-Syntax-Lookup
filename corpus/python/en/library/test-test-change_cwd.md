---
id: "python-en-function-test-change_cwd"
language: "python"
lang: "en"
category: "function"
name: "change_cwd"
signature: "change_cwd(path, quiet=False)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.change_cwd"
license: "PSF"
updated: "2026-10-01"
---

# change_cwd

A context manager that temporarily changes the current working
directory to *path* and yields the directory.

If *quiet* is `False`, the context manager raises an exception
on error.  Otherwise, it issues only a warning and keeps the current
working directory the same.
