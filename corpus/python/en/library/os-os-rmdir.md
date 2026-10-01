---
id: "python-en-function-os-rmdir"
language: "python"
lang: "en"
category: "function"
name: "rmdir"
signature: "rmdir(path, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.rmdir"
license: "PSF"
updated: "2026-10-01"
---

# rmdir

Remove (delete) the directory *path*.  If the directory does not exist or is
not empty, a `FileNotFoundError` or an `OSError` is raised
respectively.  In order to remove whole directory trees,
`shutil.rmtree` can be used.

This function can support `paths relative to directory descriptors`.

audit-event:: os.rmdir path,dir_fd os.rmdir

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
