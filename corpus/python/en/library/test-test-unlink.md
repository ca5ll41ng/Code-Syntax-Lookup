---
id: "python-en-function-test-unlink"
language: "python"
lang: "en"
category: "function"
name: "unlink"
signature: "unlink(filename)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.unlink"
license: "PSF"
updated: "2026-10-01"
---

# unlink

Call `os.unlink` on *filename*.  As with `rmdir`,
on Windows platforms, this is
wrapped with a wait loop that checks for the existence of the file.
