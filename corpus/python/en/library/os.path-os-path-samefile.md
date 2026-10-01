---
id: "python-en-function-os-path-samefile"
language: "python"
lang: "en"
category: "function"
name: "samefile"
signature: "samefile(path1, path2, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.samefile"
license: "PSF"
updated: "2026-10-01"
---

# samefile

Return `True` if both pathname arguments refer to the same file or directory.
This is determined by the device number and i-node number and raises an
exception if an `os.stat` call on either pathname fails.

> *Changed in 3.2*: Added Windows support.

> *Changed in 3.4*: Windows now uses the same implementation as all other platforms.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
