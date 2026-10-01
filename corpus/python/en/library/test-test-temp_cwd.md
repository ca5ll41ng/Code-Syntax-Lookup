---
id: "python-en-function-test-temp_cwd"
language: "python"
lang: "en"
category: "function"
name: "temp_cwd"
signature: "temp_cwd(name='tempcwd', quiet=False)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.temp_cwd"
license: "PSF"
updated: "2026-10-01"
---

# temp_cwd

A context manager that temporarily creates a new directory and
changes the current working directory (CWD).

The context manager creates a temporary directory in the current
directory with name *name* before temporarily changing the current
working directory.  If *name* is `None`, the temporary directory is
created using `tempfile.mkdtemp`.

If *quiet* is `False` and it is not possible to create or change
the CWD, an error is raised.  Otherwise, only a warning is raised
and the original CWD is used.
