---
id: "python-en-function-test-temp_dir"
language: "python"
lang: "en"
category: "function"
name: "temp_dir"
signature: "temp_dir(path=None, quiet=False)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.temp_dir"
license: "PSF"
updated: "2026-10-01"
---

# temp_dir

A context manager that creates a temporary directory at *path* and
yields the directory.

If *path* is `None`, the temporary directory is created using
`tempfile.mkdtemp`.  If *quiet* is `False`, the context manager
raises an exception on error.  Otherwise, if *path* is specified and
cannot be created, only a warning is issued.
