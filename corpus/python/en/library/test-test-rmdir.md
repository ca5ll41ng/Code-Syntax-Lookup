---
id: "python-en-function-test-rmdir"
language: "python"
lang: "en"
category: "function"
name: "rmdir"
signature: "rmdir(filename)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.rmdir"
license: "PSF"
updated: "2026-10-01"
---

# rmdir

Call `os.rmdir` on *filename*.  On Windows platforms, this is
wrapped with a wait loop that checks for the existence of the file,
which is needed due to antivirus programs that can hold files open and prevent
deletion.
