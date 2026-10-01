---
id: "python-en-function-tabnanny-check"
language: "python"
lang: "en"
category: "function"
name: "check"
signature: "check(file_or_dir)"
directive: "function"
module: "tabnanny"
source_url: "https://docs.python.org/3/library/tabnanny.html#tabnanny.check"
license: "PSF"
updated: "2026-10-01"
---

# check

If *file_or_dir* is a directory and not a symbolic link, then recursively
descend the directory tree named by *file_or_dir*, checking all `.py`
files along the way.  If *file_or_dir* is an ordinary Python source file, it
is checked for whitespace related problems.  The diagnostic messages are
written to standard output using the `print` function.
