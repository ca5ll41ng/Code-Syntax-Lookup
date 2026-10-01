---
id: "python-en-function-filecmp-cmp"
language: "python"
lang: "en"
category: "function"
name: "cmp"
signature: "cmp(f1, f2, shallow=True)"
directive: "function"
module: "filecmp"
source_url: "https://docs.python.org/3/library/filecmp.html#filecmp.cmp"
license: "PSF"
updated: "2026-10-01"
---

# cmp

Compare the files named *f1* and *f2*, returning `True` if they seem equal,
`False` otherwise.

If *shallow* is true and the `os.stat` signatures (file type, size, and
modification time) of both files are identical, the files are taken to be
equal.

Otherwise, the files are treated as different if their sizes or contents differ.

Note that no external programs are called from this function, giving it
portability and efficiency.

This function uses a cache for past comparisons and the results,
with cache entries invalidated if the `os.stat` information for the
file changes.  The entire cache may be cleared using `clear_cache`.
