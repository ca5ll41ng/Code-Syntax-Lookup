---
id: "python-zh-function-filecmp-cmp"
language: "python"
lang: "zh"
category: "function"
name: "cmp"
signature: "cmp(f1, f2, shallow=True)"
directive: "function"
module: "filecmp"
source_url: "https://docs.python.org/zh-cn/3/library/filecmp.html#filecmp.cmp"
license: "PSF"
updated: "2026-10-01"
---

# cmp

Compare the files named *f1* and *f2*, returning `True` if they seem equal,
`False` otherwise.

If *shallow* is true and the `os.stat` signatures (file type, size, and
modification time) of both files are identical, the files are taken to be
equal.

在其他情况下，如果文件大小或内容不同则它们会被视为不同。

Note that no external programs are called from this function, giving it
portability and efficiency.

This function uses a cache for past comparisons and the results,
with cache entries invalidated if the `os.stat` information for the
file changes.  The entire cache may be cleared using `clear_cache`.
