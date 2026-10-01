---
id: "python-en-function-os-path-getatime"
language: "python"
lang: "en"
category: "function"
name: "getatime"
signature: "getatime(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.getatime"
license: "PSF"
updated: "2026-10-01"
---

# getatime

Return the time of last access of *path*.  The return value is a floating-point number giving
the number of seconds since the epoch (see the  `time` module).  Raise
`OSError` if the file does not exist or is inaccessible.
