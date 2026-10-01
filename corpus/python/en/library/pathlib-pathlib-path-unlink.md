---
id: "python-en-function-pathlib-path-unlink"
language: "python"
lang: "en"
category: "function"
name: "Path.unlink"
signature: "Path.unlink(missing_ok=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.unlink"
license: "PSF"
updated: "2026-10-01"
---

# Path.unlink

Remove this file or symbolic link.  If the path points to a directory,
use `Path.rmdir` instead.

If *missing_ok* is false (the default), `FileNotFoundError` is
raised if the path does not exist.

If *missing_ok* is true, `FileNotFoundError` exceptions will be
ignored (same behavior as the POSIX `rm -f` command).

> *Changed in 3.8*: The *missing_ok* parameter was added.
