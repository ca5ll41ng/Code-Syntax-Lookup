---
id: "python-zh-function-shutil-follow_symlinks-true"
language: "python"
lang: "zh"
category: "function"
name: "follow_symlinks=True)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/zh-cn/3/library/shutil.html#shutil.follow_symlinks=True)"
license: "PSF"
updated: "2026-10-01"
---

# follow_symlinks=True)

修改给定 *path* 的所有者 *user* 和/或 *group*。

*user* can be a system user name or a uid; the same applies to *group*. At
least one argument is required.

另请参阅下层的函数 :func:`os.chown`。

audit-event:: shutil.chown path,user,group shutil.chown

availability:: Unix.

> *Added in 3.3*

> *Changed in 3.13*: Added *dir_fd* and *follow_symlinks* parameters.
