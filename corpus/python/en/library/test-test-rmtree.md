---
id: "python-en-function-test-rmtree"
language: "python"
lang: "en"
category: "function"
name: "rmtree"
signature: "rmtree(path)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.rmtree"
license: "PSF"
updated: "2026-10-01"
---

# rmtree

Call `shutil.rmtree` on *path* or call `os.lstat` and
`os.rmdir` to remove a path and its contents.  As with `rmdir`,
on Windows platforms
this is wrapped with a wait loop that checks for the existence of the files.
