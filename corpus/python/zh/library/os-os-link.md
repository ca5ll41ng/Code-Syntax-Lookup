---
id: "python-zh-function-os-link"
language: "python"
lang: "zh"
category: "function"
name: "link"
signature: "link(src, dst, *, src_dir_fd=None, dst_dir_fd=None, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.link"
license: "PSF"
updated: "2026-10-01"
---

# link

创建一个指向 *src* 的硬链接，名为 *dst*。

This function can support specifying *src_dir_fd* and/or *dst_dir_fd* to
supply `paths relative to directory descriptors`, and `not
following symlinks`.
The default value of *follow_symlinks* is `False` on Windows.

audit-event:: os.link src,dst,src_dir_fd,dst_dir_fd os.link

availability:: Unix, Windows.

> *Changed in 3.2*: Added Windows support.

> *Changed in 3.3*: Added the *src_dir_fd*, *dst_dir_fd*, and *follow_symlinks* parameters.

> *Changed in 3.6*: Accepts a :term:`path-like object` for *src* and *dst*.
